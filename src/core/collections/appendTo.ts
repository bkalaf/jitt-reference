import cloneArray from './cloneArray';
import isNil from '../isNil';

function appendTo<T>(arr: T[]) {
    return function (toAppend: T | undefined) {
        if (isNil(toAppend)) { return cloneArray(arr); }
        const result = cloneArray(arr);
        result.push(toAppend);
        return result;
    };
}
export default appendTo;