import * as calculator from '../functions/calculator';

test('calculator addition works', () => {
    expect(calculator.calculator(3, 3).add()).toBe(6);
});

test('calculator subtraction works', () => {
    expect(calculator.calculator(3, 1).subtract()).toBe(2);
});

test('calculator multiplication works', () => {
    expect(calculator.calculator(3, 4).multiply()).toBe(12);
});

test('calculator division works', () => {
    expect(calculator.calculator(10, 2).divide()).toBe(5);
});