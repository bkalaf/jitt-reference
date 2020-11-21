function flip<T, U, V>(f: (x: T) => (y: U) => V) {
    return (y: U) => (x: T) => f(x)(y);
}
export default flip;