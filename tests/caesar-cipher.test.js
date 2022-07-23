import * as caesar from '../functions/caesar-cipher';

test('shifts forward for one letter', () => {
    expect(caesar.cipher('a', 1)).toBe('b');
});

test('shifts forward two numbers', () => {
    expect(caesar.cipher('a', 2)).toBe('c');
});

test('shifts forward multiple letters', () => {
    expect(caesar.cipher('abc', 1)).toBe('bcd');
});

test('shifts forward when shift is high number', () => {
    expect(caesar.cipher('ab', 27)).toBe('bc');
});

test('shifts negatively', () => {
    expect(caesar.cipher('a', -1)).toBe('z');
});

test('shifts negatively more', () => {
    expect(caesar.cipher('abc', -2)).toBe('yza');
});

/* test('keeps same case', () => {
    expect(caesar.cipher('AbC', 1)).toBe('BcD');
});

test('keeps punctuation', () => {
    expect(caesar.cipher('a.b', 1)).toBe('b.c');
}); */