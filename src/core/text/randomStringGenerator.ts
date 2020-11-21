import { initArrayWith, range } from '../collections';

import { ASCII } from './';

function randomStringGenerator(length: number) {
    const chars = [...range(ASCII.a, ASCII.z), ...range(ASCII.A, ASCII.Z)];
    const rands = initArrayWith(() => Math.random(), length);
    return rands.map(x => Math.floor(x * chars.length)).map(x => String.fromCharCode(chars[x])).join('');
}

export default randomStringGenerator;