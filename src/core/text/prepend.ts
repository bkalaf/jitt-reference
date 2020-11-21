import concat from "./concat"

function prepend(l: string) {
    return function(r: string) {
        return concat(l, r);
    }
}
export default prepend;