import { isEmpty } from "./text";
import { isString } from "./typeof";

function isNil(x?: any): x is (null | undefined) {
    if (isString(x)) {
        return isEmpty(x);
    }
    return x == null;
}
export default isNil;