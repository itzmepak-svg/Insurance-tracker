/**
 * Street: five houses in a row on a paved strip. The house under the pointer
 * lifts and its roof and walls turn bright; its neighbours lift less and less,
 * staggered outwards. The slider is the stagger, in ms.
 *
 * The pattern: discrete items. Tweens, a stagger by distance, and a hit test
 * on each house's resting position, so a lifted house cannot change the choice.
 */
const {
  Cam, clamp, facing, fillet, fit, hull, poly, proj, prism, put, rings, rrect, seg, solid,
  tdone, tset, tval, tween, disposer, mk, pointer, reflect, register,
} = HL;

const SPEC = [
  { w: 26, d: 32, h: 26, rh: 14, chim: 1 },
  { w: 22, d: 30, h: 34, rh: 12, chim: 0 },
  { w: 30, d: 34, h: 24, rh: 16, chim: 1 },
  { w: 24, d: 30, h: 30, rh: 10, chim: 0 },
  { w: 26, d: 32, h: 22, rh: 15, chim: 1 },
];
const GAP = 9, YF = 34, E = 2, LIFT = 16, FALL = [1, 0.38, 0.12], MARK = 2, SL = 4;
const HOUSES = SPEC.map((s, i) => {
  const x0 = SPEC.slice(0, i).reduce((a, q) => a + q.w + GAP, 0);
  return { ...s, x0, x1: x0 + s.w, y0: YF - s.d, cx: x0 + s.w / 2, rg: rings(x0, YF - s.d, x0 + s.w, YF, 3, 1.2) };
});
const XE = HOUSES[HOUSES.length - 1].x1;

/** House hs lifted by z: its body, door, window, roof, ridge crease and chimney, as paths. */
function parts(P, front, hs, z) {
  const { x0, x1, y0, h, rh, cx, rg } = hs, hw = (x1 - x0) / 2 + E;
  const roof = [[x0 - E, y0 - E, h], [x1 + E, y0 - E, h], [x1 + E, YF + E, h], [x0 - E, YF + E, h], [cx, y0 - E, h + rh], [cx, YF + E, h + rh]].map(([a, b, c]) => P(a, b, c + z));
  const hp = hull(roof);
  const door = rrect(cx - 7, 0, cx - 1, 12, 2, 3).map((q) => P(q.u, YF, q.v + z));
  const win = rrect(y0 + 8, h - 15, y0 + 17, h - 6, 2, 3).map((q) => P(x1, q.u, q.v + z));
  const out = {
    body: prism(P, front, rg[0], rg[1], z, h + z),
    door: poly(door), win: poly(win), roof: poly(fillet(hp, hp.map(() => 2.5), 3)), ridge: seg(roof[5], roof[2]),
  };
  if (hs.chim) {
    const kx = cx + hw * 0.45, base = h + rh * (1 - (kx - cx) / hw) + z, [cr, ci] = rings(kx - 2.5, y0 + 6, kx + 2.5, y0 + 11, 1.2, 0.6);
    out.chim = prism(P, front, cr, ci, base - 1, h + rh + 4 + z);
  }
  return out;
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let stag = value;

  // fitted to the strip with the tallest house lifted, so nothing leaves the frame in any pose
  const C = Cam(45, 0.5, 1.7);
  fit(C, [[-8, -8, -SL], [XE + 8, -8, -SL], [XE + 8, YF + 8, -SL], [-8, YF + 8, -SL], [HOUSES[1].cx, HOUSES[1].y0, 46 + LIFT]], 200, 166);
  const P = proj(C), front = facing(C);

  const g = mk("g", {}, svg);
  const [so, si] = rings(-8, -8, XE + 8, YF + 8, 6, 1.6);
  reflect(svg, g, P, front, so, -SL, 14);
  put(solid(g), prism(P, front, so, si, -SL, 0));

  const hs = HOUSES.map((s, i) => {
    const grp = mk("g", {}, g), body = solid(grp);
    const door = mk("path", { class: i === MARK ? "nf hi" : "nf" }, grp), win = mk("path", { class: "nf lo" }, grp);
    const roof = mk("path", { class: "sil" }, grp), ridge = mk("path", { class: "nf lo" }, grp);
    return { s, body, door, win, roof, ridge, chim: s.chim ? solid(grp) : null, z: tween(0), last: NaN };
  });

  function draw(i, z) {
    const h = hs[i], q = parts(P, front, h.s, z);
    put(h.body, q.body);
    h.door.setAttribute("d", q.door); h.win.setAttribute("d", q.win);
    h.roof.setAttribute("d", q.roof); h.ridge.setAttribute("d", q.ridge);
    if (h.chim) put(h.chim, q.chim);
  }

  const B = register(stage, (_dt, now) => {
    let moving = false;
    hs.forEach((h, i) => {
      const z = tval(h.z, now);
      if (z !== h.last) { h.last = z; draw(i, z); }
      if (!tdone(h.z, now)) moving = true;
    });
    return moving;
  });
  bag.add(B.unregister);

  // hit boxes at rest: the house whose resting centre is nearest in x, inside its resting height
  const unit = P(1, 0, 0)[0] - P(0, 0, 0)[0];
  const box = HOUSES.map((s) => ({
    sx: P(s.cx, (s.y0 + YF) / 2, 0)[0], r: Math.abs(unit) * (s.w + s.d) / 2,
    y0: P(s.cx, s.y0, s.h + s.rh)[1] - 6, y1: P(s.x1, YF, 0)[1] + 6,
  }));
  function hit([x, y]) {
    let best = -1, bd = 1e9;
    box.forEach((b, i) => { const d = Math.abs(x - b.sx); if (d < b.r && y > b.y0 && y < b.y1 && d < bd) { bd = d; best = i; } });
    return best;
  }

  let act = -1;
  function setActive(a) {
    if (a === act) return;
    const now = performance.now(), from = a >= 0 ? a : act;
    act = a;
    hs.forEach((h, i) => {
      const delay = Math.abs(i - from) * stag, on = i === a;
      tset(h.z, a < 0 ? 0 : LIFT * FALL[Math.min(Math.abs(i - a), 2)], now, delay);
      h.roof.classList.toggle("hi", on); h.body.sil.classList.toggle("hi", on);
      h.door.classList.toggle("hi", a < 0 && i === MARK);
    });
    read.textContent = a < 0 ? "rest" : "house " + (a + 1);
    B.wake();
  }

  bag.add(pointer(stage, { move: (p) => setActive(hit(p)), leave: () => setActive(-1) }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { stag = v; },
    destroy: bag.dispose,
  };
}

hairline({
  name: "street",
  means: "Five houses on a strip: the one under the pointer lifts, and its neighbours follow in turn, less each time.",
  rules: [1, 2, 3, 8],
  range: [0, 45, 100],
  tour: [[104, 138], [205, 150], [283, 200], null],
  mount,
});
