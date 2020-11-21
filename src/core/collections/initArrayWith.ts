function initArrayWith<T>(f: () => T, num: number): T[] {
    if (num === 0) { return []; }
    return [ f(), ...initArrayWith(f, num - 1) ];
}

export default initArrayWith;