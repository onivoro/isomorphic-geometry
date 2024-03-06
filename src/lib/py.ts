export const pythagorean = ({
    o,
    a,
    h,
  }: {
    o?: number;
    a?: number;
    h?: number;
  }) => {
    if (o && a) {
      const oSquared = o * o;
      const aSquared = a * a;

      h = Math.pow(oSquared + aSquared, 0.5);
    }

    return { o, a, h };
  };