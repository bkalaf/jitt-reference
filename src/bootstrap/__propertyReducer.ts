import IBootstrapBaseProps from './types/IBootstrapBaseProps';
import { appendTo } from '../core/collections';

function propertyReducer(...funcs: any[]) {
    function inner<T extends IBootstrapBaseProps, U>(handler: (x: T & U) => [T, string | undefined]) {
        return function (x: T & U) {
            const [newProps, classToAdd] = handler(x);
            const adjustedProps = { ...newProps, ...{ classList: appendTo(newProps.classList)(classToAdd) } };
            return adjustedProps;
        };
    }
    return function (props: IBootstrapBaseProps) {
        return funcs.reduce((pv, cv) => inner(cv)(pv), props);
    };
}
export default propertyReducer;