export function framing(
    width: number,
    offset: number
): { verticalStuds: number, completeCavityCount: number, partialCavity: number, cavityCount: number } {
    const cavityResult = width / offset;
    const completeCavityCount = Math.floor(cavityResult);
    const partialCavity = cavityResult - completeCavityCount;
    const cavityCount = completeCavityCount + (partialCavity ? 1 : 0);
    const verticalStuds = cavityCount + 1;
    return {
        completeCavityCount,
        partialCavity,
        cavityCount,
        verticalStuds
    };

}