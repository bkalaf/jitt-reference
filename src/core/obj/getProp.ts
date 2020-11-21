function getProp<T>(key: keyof T) {
    return function (obj: T) {
        return obj[key];
    }
}
export default getProp;