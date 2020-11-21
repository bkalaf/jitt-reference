import IBootstrapBaseProps from "../types/IBootstrapBaseProps";
import { MappedType } from "../../types";

function lookupMappedValue<K extends string, V>(x: MappedType<K, V>) {
    return function (key: K): V {
        return x[key];
    };
}
export default lookupMappedValue;

type PropsObjectCtor<TKey extends string, TValue> = (x: TValue) => MappedType<TKey, TValue>;
type ClassNameWriter<T, U extends IBootstrapBaseProps> = [ T & U, string[]]; 
type ClassNameTransform<TKey extends string, TValue> = <T extends IBootstrapBaseProps>(props: MappedType<TKey, TValue> & T) => [T, string[]];


