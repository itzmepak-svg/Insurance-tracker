/**
 * Cutaway: one house in three layers, ground floor, upper floor and roof. The
 * pointer's x scrubs how far they come apart; its height picks the layer,
 * which gets the bright edge. The slider is the widest the gap may open.
 *
 * The pattern: scrub and pick. A spring for the gap, a hit test on the layers
 * at their resting heights, so a layer riding up cannot change the choice.
 */
const {
  Cam, clamp, facing, fillet, fit, hull, lerp, poly, proj, prism, put, rings, rrect, seg, solid, stepS, spring,
  disposer, mk, pointer, reflect, register,
} = HL;

const X1 = 72, Y1 = 52, UP = 3, HF = 24, RH = 16, E = 3, GAP0 = 4, NAMES = ["floor 1", "floor 2", "roof"];

/** The three layers with the gap g between them: paths for each. */
function layers(P, front, g, ring0, ring1) {
  const z1 = HF + g, z2 = 2 * HF + 2 * g, cx = X1 / 2;
  const onY = (box, y, z) => poly(rrect(...box, 2, 3).map((q) => P(q.u, y, q.v + z)));
  const onX = (box, x, z) => poly(rrect(...box, 2, 3).map((q) => P(x, q.u, q.v + z)));
  const roof = [[-E, -E, 0], [X1 + E, -E, 0], [X1 + E, Y1 + E, 0], [-E, Y1 + E, 0], [cx, -E, RH], [cx, Y1 + E, RH]].map(([a, b, c]) => P(a, b, c + z2));
  const hp = hull(roof), kx = cx + (cx + E) * 0.45, [cr, ci] = rings(kx - 3, 6, kx + 3, 12, 1.4, 0.7);
  return [
    { body: prism(P, front, ring0[0], ring0[1], 0, HF), art: [onY([12, 0, 22, 15], Y1, 0), onX([14, 8, 28, 18], X1, 0)] },
    { body: prism(P, front, ring1[0], ring1[1], z1, z1 + HF), art: [onY([13, 8, 24, 18], Y1 - UP, z1), onY([48, 8, 59, 18], Y1 - UP, z1), onX([16, 8, 30, 18], X1 - UP, z1)] },
    { roof: poly(fillet(hp, hp.map(() => 2.5), 3)), ridge: seg(roof[5], roof[2]), body: prism(P, front, cr, ci, z2 + RH * (1 - (kx - cx) / (cx + E)) - 1, z2 + RH + 4) },
  ];
}

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let wide = value, act = -1, lastG = NaN;
  const gap = spring(GAP0);

  // fitted to the house at its widest, so nothing leaves the frame in any pose
  const C = Cam(45, 0.5, 1.5);
  fit(C, [[-E, -E, 0], [X1 + E, -E, 0], [X1 + E, Y1 + E, 0], [-E, Y1 + E, 0], [X1 / 2, -E, 2 * HF + RH + 2 * 30 + 4]], 200, 166);
  const P = proj(C), front = facing(C);
  const ring0 = rings(0, 0, X1, Y1, 4, 1.4), ring1 = rings(UP, UP, X1 - UP, Y1 - UP, 4, 1.4);

  const g = mk("g", {}, svg);
  const [so, si] = rings(-E - 6, -E - 6, X1 + E + 6, Y1 + E + 6, 6, 1.6);
  reflect(svg, g, P, front, so, -3, 14);
  put(solid(g), prism(P, front, so, si, -3, 0));
  // dashed guides at the three visible corners, painted behind the layers they join
  const guides = [[X1, Y1], [0, Y1], [X1, 0]].map(() => mk("path", { class: "nf dash" }, g));
  const ls = [solid(g), solid(g)];
  const art = [[0, 1], [0, 1, 2], []].map((ids) => ids.map(() => mk("path", { class: "nf lo" }, g)));
  const roof = mk("path", { class: "sil" }, g), ridge = mk("path", { class: "nf lo" }, g), chim = solid(g);
  art[0][0].setAttribute("class", "nf hi");

  function draw(gv) {
    const q = layers(P, front, gv, ring0, ring1);
    put(ls[0], q[0].body); put(ls[1], q[1].body);
    q[0].art.forEach((d, i) => art[0][i].setAttribute("d", d));
    q[1].art.forEach((d, i) => art[1][i].setAttribute("d", d));
    roof.setAttribute("d", q[2].roof); ridge.setAttribute("d", q[2].ridge);
    put(chim, q[2].body);
    [[X1, Y1], [0, Y1], [X1, 0]].forEach(([x, y], i) => guides[i].setAttribute("d", seg(P(x, y, 0), P(x, y, 2 * HF + 2 * gv))));
  }
  draw(GAP0);

  const B = register(stage, (dt) => {
    const moving = stepS(gap, dt);
    if (gap.x !== lastG) { lastG = gap.x; draw(gap.x); }
    return moving;
  });
  bag.add(B.unregister);

  // hit test: the layers at their resting height; the bands never move
  const mid = [HF / 2, HF + GAP0 + HF / 2, 2 * HF + 2 * GAP0 + RH / 2].map((z) => P(X1 / 2, Y1 / 2, z)[1]);
  const xl = P(0, Y1, 0)[0] - 8, xr = P(X1, 0, 0)[0] + 8;
  const pick = (y) => mid.reduce((b, m, i) => (Math.abs(y - m) < Math.abs(y - mid[b]) ? i : b), 0);

  function setActive(a) {
    if (a === act) return;
    act = a;
    ls[0].sil.classList.toggle("hi", a === 0); ls[1].sil.classList.toggle("hi", a === 1);
    roof.classList.toggle("hi", a === 2);
    art[0][0].setAttribute("class", a < 0 ? "nf hi" : "nf lo");
    read.textContent = a < 0 ? "rest" : NAMES[a];
  }
  bag.add(pointer(stage, {
    move: ([x, y]) => {
      if (x < xl || x > xr) { gap.t = GAP0; setActive(-1); B.wake(); return; }
      gap.t = lerp(GAP0, wide, clamp((x - xl) / (xr - xl), 0, 1));
      setActive(pick(y)); B.wake();
    },
    leave: () => { gap.t = GAP0; setActive(-1); B.wake(); },
  }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { wide = v; },
    destroy: bag.dispose,
  };
}

hairline({
  name: "cutaway",
  means: "A house in three layers: moving across pulls them apart, and the height of the pointer picks floor or roof.",
  rules: [1, 3, 8, 9],
  range: [10, 20, 30],
  tour: [[150, 215], [205, 185], [260, 150], null],
  mount,
});
