import { MappedType } from "../../types";
import ctorReducerArgs from "../ctorReducerArgs";
import infoCreator from "../infoCreator";

export function toInfo<TKey extends string, TValue extends string, TOutcome = undefined>(key: TKey,
    map: MappedType<TValue, TOutcome>,
    prefix: string = '',
    suffix: string = '') {
    return infoCreator<MappedType<TKey, TValue>, TKey>(ctorReducerArgs(key, map, prefix, suffix));
}
