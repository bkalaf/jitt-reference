import concat from "./concat"

function append(r: string) {
    return function (l: string) {
        return concat(l, r);
    }
}
export default append;