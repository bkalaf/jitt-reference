import hasNoMembers from './hasNoMembers';
import isNil from '../isNil';

function cloneArray<T>(arr?: T[]): T[] {
    if (isNil(arr)) { return []; }
    if (hasNoMembers(arr)) { return []; }
    const [h, ...t] = arr;
    return [h, ...cloneArray(t)];
}
export default cloneArray;