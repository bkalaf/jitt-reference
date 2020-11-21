import { Predicate } from "../../types";
import compl from "./compl";

function compl3<T, U>(pred: (x: T) => Predicate<U>) {
    return (x: T) => compl(pred(x));
}

export default compl3;