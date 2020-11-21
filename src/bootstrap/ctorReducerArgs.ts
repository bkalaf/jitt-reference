import { MappedType } from '../types';
import ReducerParams from './types/ReducerParams';

function ctorReducerArgs<TProps, TKey, TOutput>(key: TKey,
    map: MappedType<string, TOutput> | null = null,
    prefix: string = '',
    suffix: string = ''): ReducerParams<TProps, TKey, TOutput> {
    return ({
        key,
        prefix,
        suffix,
        map
    });
}
export default ctorReducerArgs;