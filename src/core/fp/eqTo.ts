import _eqTo from "./_eqTo";

function eqTo<T>(l: T) {
    return (r: T) => _eqTo(l, r);
}
export default eqTo;