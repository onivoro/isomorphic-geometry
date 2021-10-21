import { toa } from "./toa";

const o = 3;

test("given the opposite and adjacent, the inverse tangent of their ratio is returned", () => {
  expect(toa({ o, a: o }).degrees).toBeCloseTo(45);
});
