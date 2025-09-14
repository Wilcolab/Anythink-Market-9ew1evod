function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }
    return input
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1-$2') // handle camelCase
        .replace(/[\s_]+/g, '-')             // spaces and underscores to hyphens
        .toLowerCase();
}