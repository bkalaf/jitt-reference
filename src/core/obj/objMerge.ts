function objMerge<T, U>(o1: T, o2: U): T & U {
    return Object.assign({}, o1, o2);
}
export default objMerge;