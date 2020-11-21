type MappedType<K extends string, V> = { [P in K]: V };
export default MappedType;