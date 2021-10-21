import { radiansPerDegree } from "./constants";
import { degreesPerRadian } from "./constants";

test("radiansPerDegree", () => {
  expect(radiansPerDegree).toBeCloseTo(Math.PI / 180);
});

test("degreesPerRadian", () => {
  expect(degreesPerRadian).toBeCloseTo(360 / (Math.PI * 2));
});
