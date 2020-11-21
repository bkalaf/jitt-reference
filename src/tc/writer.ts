// import { Predicate } from "../types";

// export type Writer<T, TLog> = [T, TLog];
// export type LogWriter<T> = Writer<T, string[]>;

// export function ctorWriter<T, TLog extends Appendable<TLog>>(
//     x: T
// ): Writer<T, TLog> {
//     return [x, [] as any];
// }
// export const of = <T, TLog extends Appendable<TLog>>(x: T): Writer<T, TLog> =>
//     ctorWriter<T, TLog>(x);
// export interface Appendable<T> {
//     concat(this: T, o2: T): T;
// }
// export function chain<T, U, TLog extends Appendable<TLog>>(
//     f: (x: T) => Writer<U, TLog>
// ) {
//     return function (xM: Writer<T, TLog>): Writer<U, TLog> {
//         const [value, log] = xM;
//         const [value2, log2] = f(value);
//         return [value2, log.concat(log2)];
//     };
// }
// export function ap<T, U, TLog extends Appendable<TLog>>(
//     fM: Writer<(x: T) => U, TLog>
// ) {
//     return function (xM: Writer<T, TLog>) {
//         return chain<(x: T) => U, U, TLog>((f: (x: T) => U) =>
//             chain<T, U, TLog>((x: T) => of(f(x)))(xM)
//         )(fM);
//     };
// }
 
// export const fmap = <T, U, TLog extends Appendable<TLog>>(f: (x: T) => U) => 
//     ap(of<(x: T) => U, TLog>(f));

// function propExist(name: string) {
//     return function (obj: object) {
//         return Object.getOwnPropertyNames(obj).includes(name);
//     }
// }


// const propNotExist = compl3(propExist);
// function removeProp<T extends object, K extends keyof T & string>(name: K) {
//     return function (obj: T) {
//         const result = {...obj};
//         delete result[name];
//         return result;
//     }
// }
// const isNull = (x?: any): x is null => x == null;
// function getProp<T extends object, K extends keyof T & string>(name: K) {
//     return function (obj: T) {
//         return obj[name];
//     }
// } 

// const mapFuncToPropValue = <T extends object, K extends keyof T & string, U>(f: (x: T[K]) => U) => {
//     return (name: K) => $(getProp<T, K>(name))(f); 
// }
// const propValueIsNull = <T extends object, K extends keyof T & string>(name: K) => 
//     $(getProp<T, K>(name))(isNull);
// const ifPropNotExist = <T extends object, K extends keyof T & string, U>(f: (x: T[K]) => U) => 
//     (name: string) => ite(propNotExist(name), x => of(x), 
//     ite(propValueIsNull(name), x => of(x), mapFuncToPropValue(f)(name)))
// function propIsNil<T extends object, K extends keyof T & string>(name: K) {
//     return function(obj: T) {
//         if (propExist(name)(obj) && obj[name] == null) {
//             delete obj[name];
//             return of(obj);
//         }
//     }
// }
// const handleBgColor = <T extends { bgColor: string }>(props: T): Writer<object, string[]> => {
//     const { bgColor, ...remain } = props;
//     if (bgColor == null) {
//         return [remain, []];
//     }
//     return [remain, [`bg-${bgColor}`]];
// }
// const handleTextColor = <T extends { textColor: string }>(props: T): Writer<object, string[]> => {
//     const { textColor, ...remain } = props;
//     if (textColor == null) {
//         return [ remain, []];
//     }
//     return [remain, [ `text-${textColor}`]];
// }

// const p = { textColor: 'red', bgColor: 'black' };
// const className = chain(handleBgColor)(chain<typeof p, any, string[]>(handleTextColor)(of(p)))
// console.log(className);

// [ handleBgColor, handleTextColor ].reduce((pv, cv) => chain(cv)(pv), of<object>(p));