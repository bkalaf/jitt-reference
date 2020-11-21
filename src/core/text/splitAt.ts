import { contains } from "./";
import { isNil } from "..";

function splitAt(delimiter: string) {
    return function (str: string) {
        if (isNil(str)) { return []; }
        if (isNil(delimiter)) { return [str]; }
        if (contains(delimiter)(str)) {
            return str.split(delimiter);
        }
        return [str];
    };
}
export default splitAt;