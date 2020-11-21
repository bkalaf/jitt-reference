
function compose<T, U>(f: (x: T) => U) {
    return function<V>(g: (x: U) => V) {
        return function(x: T) {
            return g(f(x));
        }
    }
}
const $ = <T, U, V>(f: (x: T) => U, g: (x: U) => V) => compose(f)(g);
export default $;
export { compose }