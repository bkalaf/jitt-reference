function asText<T>(x: T): string {
    return (x as any).toString();
}
export default asText;