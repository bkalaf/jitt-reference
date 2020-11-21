// import { $, always, eqTo, flip, identity, ite, pipe } from '../core/fp';
// import { PropsInfo, ReducerParams } from './types';
// import { isNil } from '../core';
// import { cloneObject, doesNotHaveProperty, getProp, removeFrom, replaceProperty } from '../core/obj';

// import IBootstrapBaseProps from './types/IBootstrapBaseProps';
// import { AnyFunc, MappedType } from '../types';
// import lookupMappedValue from './props/lookupMappedValue';

// function infoCreator<TProps extends MappedType<TKey, any>, TKey extends string>(
//     args: ReducerParams<TProps, TKey, any>
// ): PropsInfo<TKey, TProps> {
//     return {
//         key: args.key,
//         toProps: (x: TProps[TKey]): TProps => ({ [args.key]: x } as TProps),
//         reducer: <T>(x: IBootstrapBaseProps & TProps & T) => {
//             const { key, suffix, prefix, map } = args;
//             if (doesNotHaveProperty(key)(x)) {
//                 return x;
//             }
//             const firstConditional = (goodPath: AnyFunc) => ite(doesNotHaveProperty<IBootstrapBaseProps & TProps & T>(key),
//             identity, goodPath);

            
//             const isValueNil = $(getProp<TProps>(key), isNil);
//             const conseq = $<TProps, TProps, TProps>(cloneObject, flip(removeFrom)<TProps>(key))
//             const secondConditional = (goodPath: AnyFunc) => ite(isValueNil, conseq, goodPath);

//             const  = ite(always(isNil(map)), always('dark'), lookupMappedValue<string, string>(map!))
//             const initialPredicate = $(getPropertyFrom(x), isNil);
//             const initSuccess = pipe(cloneObject)
//             const initialSuccess = pipe(cloneObject, flip(removeFrom)(name));
//             const initalCondition = ite(), pipe(cloneObject, 
//                 removeFrom, ) )
            
//             // const ifAll = ite($(trim, eqTo('all')), always(''), $(trim, identity))
//             // const checkIfArray = ite(contains(' '), 
//             //     pipe(splitAt(' '),
//             // fmap($(ifAll, trim)), foldl(join(' '))('')))), pipe(

//             // ));)
//             // const lookup = ite<typeof Enums.Colors, typeof Enums.Contexts>(
//             //     (k) => isNil(map),
//             //     always('dark'),
//             //     lookupMappedValue(map!)
//             // );

            
//             // const f1: typeof lookup = identity as any;
//             // const f2: ReturnType<typeof append> = identity as any;
//             // const subLookup = 
//             //     pipe<typeof f1, typeof trim>(
//             //         lookup, asText, prepend(prefix), append(suffix), trim);            
//             // const arrayLookup = $(splitAt(' '), $(fmap(subLookup), foldl(join(' '))(''));

            
//             // const arrayLookup = $(splitAt(' '), $(fmap(subLookup), foldl(join(' '))(''));
//             // const lookup2 = ite(isArray, fmap(subLookup), subLookup)
//             // const funcs: ((x: any) => any)[] = [
//             //     lookup,
//             //     asText,
//             //     prepend(prefix),
//             //     append(suffix),
//             //     appendTo(currentList),
//             //     replaceProperty('classList', x),
//             //     flip(removeFrom)(key)
//             // ];
//             return funcs.reduce((pv, cv) => $(pv, cv))(value);
//         }
//     };
// }
// export default infoCreator;