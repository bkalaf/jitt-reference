export function joinWith(mid: string) {
    return function (l: string, r: string) {
        return [l, r].join(mid);
    }
}
export default joinWith;

