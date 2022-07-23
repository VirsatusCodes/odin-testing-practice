import * as stringMethods from '../functions/string-work';

let string = 'perfection';

test('return string w/first letter capitalized', () => {
    expect(stringMethods.capitalizeFirstLetter(string)).toBe('Perfection');
});

let stringReverse = 'calamari';

test('reverses the string', () => {
    expect(stringMethods.reverseString(stringReverse)).toBe('iramalac');
});