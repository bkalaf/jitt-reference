import { hasNoMembers } from './';

function foldl<TState, T>(folder: (x: TState) => (current: T) => TState) {
    return function (init: TState) {
        return function (arr: T[]): TState {
            if (hasNoMembers(arr)) { return init; }
            const [head, ...tail] = arr;
            return foldl(folder)(folder(init)(head))(tail);
        };
    };
}
export default foldl;