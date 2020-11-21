import { compl } from "./fp";
import isNil from "./isNil";

function isNotNil<T>(x?: any): x is NonNullable<T> {
    return compl(isNil)(x);
}
export default isNotNil;