import asText from '../asText';
import cloneObject from './cloneObject';
import hasProperty from './hasProperty';

function removeFrom<T extends object>(obj: T) {
    return function (name: keyof T) {
        if (hasProperty(asText(name))(obj)) {
            const newObj = cloneObject(obj);
            delete newObj[name];
            return newObj;
        } 
        return cloneObject(obj);
    };
}
export default removeFrom;
