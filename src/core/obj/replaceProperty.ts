import cloneObject from "./cloneObject";

function replaceProperty<T extends object>(key: keyof T, obj: T) {
    return function (value: T[keyof T]) {
        const result = cloneObject(obj);
        result[key] = value;
        return result;
    };
}
export default replaceProperty;