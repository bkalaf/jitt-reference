function isA<T>(name: string) {
    return function(x?: any): x is T {
        return typeof x === name;
    }
}

const isString = isA<string>('string');
const isBoolean = isA<boolean>('boolean');
const isNumber = isA<number>('number');
const isSymbol = isA<symbol>('symbol');
const isBigInt = isA<bigint>('bigint');
const isUndefined = isA<undefined>('undefined');
const isFunction = isA<Function>('function');
const isNull = (x?: any): x is null => x == null;
const isArray = <T>(x?: any): x is T[] => Array.isArray(x);

export {
    isArray,
    isBigInt,
    isBoolean,
    isFunction,
    isNull,
    isNumber,
    isString,
    isSymbol,
    isUndefined
}