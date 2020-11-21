function hasProperty<T>(key: string) {
    return (obj: T) => {
        return Object.getOwnPropertyNames(obj).includes(key);
    };
}
export default hasProperty;