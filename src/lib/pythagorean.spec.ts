import { pythagorean } from "./pythagorean";

test("given the opposite and adjacent, hypotenuse is returned", () => {
  expect(pythagorean({ o: 3, a: 4 }).h).toBeCloseTo(5);
});
