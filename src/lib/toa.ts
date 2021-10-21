import { degreesPerRadian } from "..";

export const toa = ({ o, a }: { o?: number; a?: number }) => {
  let radians;

  if (o && a) {
    radians = Math.atan(o / a);
  }

  return { radians, degrees: radians && radians * degreesPerRadian };
};
