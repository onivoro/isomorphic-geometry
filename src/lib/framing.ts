export function framing(
    width: number,
    offset: number,
    studWidth = 1.5
): { verticalStuds: number, completeCavityCount: number, partialCavity: number, cavityCount: number, cavityWidth: number } {
    const cavityPlusStud = offset + studWidth;
    const cavityResult = width / cavityPlusStud;
    const completeCavityCount = Math.floor(cavityResult);
    const partialCavity = width - (completeCavityCount * cavityPlusStud);
    const cavityCount = completeCavityCount + (partialCavity ? 1 : 0);
    const verticalStuds = cavityCount + 1;
    const cavityWidth = offset - studWidth;
    return {
        completeCavityCount,
        partialCavity,
        cavityCount,
        verticalStuds,
        cavityWidth
    };

}