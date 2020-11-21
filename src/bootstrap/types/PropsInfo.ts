// TODO delete PropsInfo.ts
// import { always, identity } from '../../core/fp';

// import { $$bgColor } from '../props/bgColorProps';
// import Enums from '../enums';
// import IBootstrapBaseProps from './IBootstrapBaseProps';
// import { MappedType } from '../../types';
// import PropertyType from './PropertyType';
// import _ColorNames from '../enums/_ColorNames';
// import _Contexts from '../enums/_Contexts';
// import { appendTo } from '../../core/collections';
// import colorToContextMap from '../maps/colorToContext';
// import defaultProps from '../defaultProps';
// import { replaceProperty } from '../../core/obj';
// import { Args } from './Args';

// type Unwrapped<T> = T extends Array<infer R> ? R : T;

// type Xform<T, U> = (x: T) => U;
// export type SingleValueProp<
//    TKey extends string,
//    TInputType, 
//    TPropertyType, 
//    TDataType extends string
// > = {
//     key: TKey,
//     defaultValue?: TInputType,
//     allowMultiple: false,
//     map: Record<TDataType, TPropertyType> | null,
//     convert: Xform<TInputType, TDataType>;
//     opts: [prefix: string, suffix: string, seperator: string, insertFunc: Xform<string, string>]
// }

// export type MultiValuedProp<
//    TKey extends string, 
//    TInputType,
//    TPropertyType,
//    TDataType extends string
// > = {
//     key: TKey,
//     defaultValue?: TInputType,
//     allowMultiple: true,
//     map: Record<TDataType, TPropertyType> | null,
//     convert: Xform<TInputType, TDataType[]>;
//     opts: [prefix: string, suffix: string, seperator: string, 
//         insertFunc: Xform<string, string>]
// }

// const bgColorArgs: Args<$$bgColor, _ColorNames, _Contexts, _ColorNames>  = {
//     key: $$bgColor,
//     defaultValue: undefined,
//     allowMultiple: false,
//     map: colorToContextMap,
//     convert: identity, 
//     opts: ['bg', '', '-', identity]
// }
// const btnColorArgs = {
//     key: $$bgColor,
//     defaultValue: undefined,
//     allowMultiple: false,
//     map: colorToContextMap,
//     convert: identity, 
//     opts: ['bg', '', '-', identity]
// }
// const textColorArgs = {
//     key: $$bgColor,
//     defaultValue: undefined,
//     allowMultiple: false,
//     map: colorToContextMap,
//     convert: identity, 
//     opts: ['bg', '', '-', identity]
// }
// const borderColorArgs = {
//     key: $$bgColor,
//     defaultValue: undefined,
//     allowMultiple: false,
//     map: colorToContextMap,
//     convert: identity, 
//     opts: ['bg', '', '-', identity]
// }

// const alwaysAdd = (name: string) =>
// (x: IBootstrapBaseProps) => replaceProperty('classList', x)(appendTo(x.classList)(name))

// const alwaysAddBtn = alwaysAdd('btn')(defaultProps());
// console.log(alwaysAddBtn);