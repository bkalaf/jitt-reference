import cloneArray from './cloneArray';
import isNil from '../isNil';

function cons<T>(arr: T[]) {
    return function (toPrepend: T | undefined) {
        if (isNil(toPrepend)) { return cloneArray(arr); }
        return [toPrepend, ...cloneArray(arr)];
    };
}
export default cons;
