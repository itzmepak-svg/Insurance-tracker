/**
 * Shelter: a house whose roof is a lid hinged along its back wall. The nearer
 * the pointer comes to the house, the lower the roof shuts; far away it
 * stands open. The slider is the widest the roof may open, in degrees.
 *
 * The pattern: a field, with the house as the centre. A spring on the lid's
 * angle, and a hit test on the house's resting position, so a roof swinging
 * shut cannot change what the pointer is near.
 */
const {
  Cam, clamp, facing, fillet, fit, hull, lerp, open, poly, proj, prism, put, rad, ringAt, rings, rrect, run, seg, solid, stepS, spring,
  disposer, mk, pointer, reflect, register,
} = HL;

const X1 = 50, Y1 = 40, HW = 28, RH = 14, E = 2.5, TH0 = 26, NEAR = 24, FAR = 150, T = 3;

function mount({ stage, svg, read }, value) {
  const bag = disposer();
  let wide = value, tgt = TH0, covered = false;
  const th = spring(TH0);

  // fitted to the roof thrown right open, so nothing leaves the frame in any pose
  const C = Cam(45, 0.5, 2.3);
  const top = (a) => [[-E, -E, 0], [X1 + E, -E, 0], [X1 + E, Y1 + E, 0], [-E, Y1 + E, 0]].map(([x, y]) => [x, (y) * Math.cos(rad(a)), HW + y * Math.sin(rad(a))]);
  fit(C, [[-10, -10, -3], [X1 + 10, -10, -3], [X1 + 10, Y1 + 10, -3], [-10, Y1 + 10, -3], ...top(85), [X1 / 2, -E - RH, HW + 4]], 200, 166);
  const P = proj(C), front = facing(C);
  const [ro, ri] = rings(0, 0, X1, Y1, 4, 1.4), hole = rrect(T, T, X1 - T, Y1 - T, 2, 4);

  const g = mk("g", {}, svg);
  const [so, si] = rings(-10, -10, X1 + 10, Y1 + 10, 6, 1.6);
  reflect(svg, g, P, front, so, -3, 14);
  put(solid(g), prism(P, front, so, si, -3, 0));
  const body = solid(g);
  put(body, prism(P, front, ro, ri, 0, HW));
  // the opening: the wall's rim, and the far walls meeting the floor
  mk("path", { d: poly(ringAt(P, hole, HW)), class: "nf" }, g);
  mk("path", { d: open(ringAt(P, run(hole, (q) => !front(q)), 8)), class: "nf lo" }, g);
  const door = rrect(X1 / 2 - 7, 0, X1 / 2 + 1, 16, 2, 3).map((q) => P(q.u, Y1, q.v));
  const win = rrect(10, 9, 22, 20, 2, 3).map((q) => P(X1, q.u, q.v));
  mk("path", { d: poly(door), class: "nf lo" }, g); mk("path", { d: poly(win), class: "nf lo" }, g);
  const roof = mk("path", { class: "sil hi" }, g), crease = mk("path", { class: "nf lo" }, g);

  /** The roof turned a degrees about the back wall's top edge. */
  function draw(a) {
    const s = Math.sin(rad(a)), c = Math.cos(rad(a));
    const R = ([x, y, z]) => P(x, y * c - z * s, HW + y * s + z * c);
    const pts = [[-E, -E, 0], [X1 + E, -E, 0], [X1 + E, Y1 + E, 0], [-E, Y1 + E, 0], [X1 / 2, -E, RH], [X1 / 2, Y1 + E, RH]].map(R);
    const hp = hull(pts);
    roof.setAttribute("d", poly(fillet(hp, hp.map(() => 2.5), 3)));
    crease.setAttribute("d", seg(pts[5], pts[2]));
  }
  draw(TH0);

  let last = TH0;
  const B = register(stage, (dt) => {
    const moving = stepS(th, dt);
    if (th.x !== last) { last = th.x; draw(clamp(th.x, 0, 90)); }
    return moving;
  });
  bag.add(B.unregister);

  // the house's resting centre on screen: it never moves
  const c0 = P(X1 / 2, Y1 / 2, HW / 2);
  function aim([x, y]) {
    const d = Math.hypot(x - c0[0], (y - c0[1]) * 1.4), u = clamp((d - NEAR) / (FAR - NEAR), 0, 1);
    tgt = wide * u * u * (3 - 2 * u);
    th.t = tgt;
    const cov = tgt < 4;
    if (cov !== covered || read.textContent === "rest") {
      covered = cov; read.textContent = cov ? "covered" : "open";
      roof.classList.remove("hi"); body.sil.classList.add("hi");
    }
    B.wake();
  }
  function rest() {
    th.t = TH0; read.textContent = "rest"; covered = false;
    roof.classList.add("hi"); body.sil.classList.remove("hi");
    B.wake();
  }

  bag.add(pointer(stage, { move: aim, leave: rest }));
  bag.add(() => svg.replaceChildren());

  return {
    set: (v) => { wide = v; },
    destroy: bag.dispose,
  };
}

hairline({
  name: "shelter",
  means: "A house with a hinged roof: the closer the pointer comes, the lower the roof shuts, and far away it stands open.",
  rules: [1, 3, 5, 8],
  range: [45, 65, 85],
  tour: [[350, 60], [275, 150], [200, 205], null],
  mount,
});
