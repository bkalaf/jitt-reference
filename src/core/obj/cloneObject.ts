import objMerge from './objMerge';

function cloneObject<T extends object>(obj: T): T {
    return Object.getOwnPropertyNames(obj)
        .map((k) => ({ [k]: obj[k as keyof T] }))
        .reduce((pv, cv) => objMerge(pv, cv), {}) as T;
}
export default cloneObject;