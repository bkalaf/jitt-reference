import isEmpty from "./isEmpty"

function contains(target: string) {
    return function(source: string) {
        return isEmpty(source) ? false : isEmpty(target) ? false : source.includes(target);
    }
}
export default contains;