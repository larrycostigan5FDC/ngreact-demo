/**
 * Make a "glub" string of `n` length.
 * @param {number} n - Length of the glub.
 * @returns {string}
 */
export function glub(n) {
    switch (n) {
        case 0: return '';
        case 1: return 'g';
        case 2: return 'gl';
        case 3: return 'glb';
        case 4: return 'glub';
    }
    return `gl${repeat('u', n - 3)}b`;
}

/**
 * Repeat `s` string `n` times.
 * @param {string} s - The string to repeat.
 * @param {number} n - Times to repeat string.
 * @returns {string}
 */
export function repeat(s, n) {
    return Array(Math.max(n, 1)).fill(s).join('');
}
