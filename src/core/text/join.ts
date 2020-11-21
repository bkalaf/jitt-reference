import { joinWith } from "./joinWith";

function join(mid: string) {
    return function (l: string) {
        return function (r: string) {
            return joinWith(mid)(l, r);
        };
    };
}
export default join;