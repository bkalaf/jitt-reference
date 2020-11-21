// TODO delete Args.txt
// import { getProp } from '../../core/obj';
// import IBootstrapBaseProps from './IBootstrapBaseProps';
// import { SingleValueProp, MultiValuedProp } from './PropsInfo';

// export type Args<T extends string, U, V, W extends string> = SingleValueProp<T, U, V, W> |
//     MultiValuedProp<T, U, V, W>;

// function toReducer<T extends string, U, V, W extends string>(args: Args<T, U, V, W>) {
//     const { key, allowMultiple, map, defaultValue, convert, opts } = args;
//     const [prefix, suffix, seperator, insertFunc] = opts;
//     const reducer = <A>(x: IBootstrapBaseProps & Record<U, W> & A) => {
//         convert(getProp<T>(key)(x))
//     }
// }