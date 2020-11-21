import { Predicate } from "../../types";

function compl<T>(pred: Predicate<T>) {
    return (x: T) => !pred(x);
}
export default compl;