import isNotNil from '../isNotNil';

function hasNoMembers(x?: { length: number; }) {
    return isNotNil(x) && x!.length === 0;
}
export default hasNoMembers;
