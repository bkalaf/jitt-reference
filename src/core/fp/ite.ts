import { Predicate } from "../../types";

function ite<T, U>(pred: Predicate<T>, conseq: (x: T) => U, alt: (x: T) => U) {
    return (x: T) => pred(x) ? conseq(x) : alt(x);
}
export default ite;