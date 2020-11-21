function always<T>(x: T) {
    return (_x?: any) => {
        return x;
    };
}

export default always;