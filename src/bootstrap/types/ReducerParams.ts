type ReducerParams<TProps, TKey, TOutput> = {
    key: TKey;
    prefix: string;
    suffix: string;
    map: { [key: string]: TOutput; } | null;
};
export default ReducerParams;