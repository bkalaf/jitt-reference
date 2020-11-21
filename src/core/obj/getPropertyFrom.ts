function getPropertyFrom<T>(obj: T) {
    return function (key: keyof T) {
        return obj[key];
    };
}
export default getPropertyFrom;
