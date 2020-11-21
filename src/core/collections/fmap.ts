function fmap<T, U>(f: (x: T) => U) {
    return function (arr: T[]) {
        return arr.map(f);
    };
}

export default fmap;