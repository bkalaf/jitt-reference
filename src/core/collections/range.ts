function range(start: number, max: number): number[] {
    if (start > max) { return []; }
    return [start, ...range(start + 1, max) ];
}
export default range;