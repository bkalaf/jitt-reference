type PropertyType<Props, Key extends keyof Props> = {
    [P in keyof Props]: Props[P];
}[Key];

export default PropertyType;