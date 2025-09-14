/**
 * Converts a given string to camelCase format.
 *
 * - Underscores and spaces are treated as word separators.
 * - The first word is lowercased, subsequent words are capitalized.
 * - Non-string input throws an error.
 *
 * @function toCamelCase
 * @param {string} input - The string to convert to camelCase.
 * @throws {Error} Throws if input is not a string.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('First Name'); // returns 'firstName'
 * toCamelCase('FIRST _NAME'); // returns 'firstName'
 * toCamelCase('user_id'); // returns 'userId'
 */

/**
 * Converts a given string to dot.case format.
 *
 * - Underscores and spaces are replaced with dots.
 * - Uppercase letters are preceded by a dot (except at the start) and lowercased.
 * - Multiple consecutive dots are collapsed into a single dot.
 * - Leading and trailing dots are trimmed.
 * - Non-string input throws an error.
 *
 * @function toDotCase
 * @param {string} input - The string to convert to dot.case.
 * @throws {Error} Throws if input is not a string.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('First Name'); // returns 'first.name'
 * toDotCase('FIRST_NAME'); // returns 'first.name'
 * toDotCase('firstName'); // returns 'first.name'
 */
function toCamelCase(input) {
    const functionName = 'toCamelCase';
    if (typeof input !== 'string') {
        throw new Error(
            `Error in ${functionName}: Expected argument of type string, but received type '${typeof input}'.`
        );
    }

    // Replace underscores with spaces, then split by spaces
    const words = input.replace(/_/g, ' ').split(/\s+/).filter(Boolean);

    if (words.length === 0) return '';

    // Lowercase the first word, capitalize the rest
    return words
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('First Name')); // firstName
// console.log(toCamelCase('FIRST _NAME')); // firstName
function toDotCase(input) {
    const functionName = 'toDotCase';
    if (typeof input !== 'string') {
        throw new Error(
            `Error in ${functionName}: Expected argument of type string, but received type '${typeof input}'.`
        );
    }

    // Replace underscores and spaces with dots, lowercase everything
    return input
        .replace(/[_\s]+/g, '.')
        .replace(/([A-Z])/g, (match, p1, offset) => (offset > 0 ? '.' : '') + p1.toLowerCase())
        .replace(/\.{2,}/g, '.') // collapse multiple dots
        .replace(/^\.+|\.+$/g, ''); // trim leading/trailing dots
}

// Example usage:
// console.log(toDotCase('First Name')); // first.name
// console.log(toDotCase('FIRST_NAME')); // first.name
// console.log(toDotCase('firstName')); // first.name

