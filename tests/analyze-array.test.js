import * as analyze from '../functions/analyze-array';

let obj = [1,8,3,4,2,6]

/* test('min value given', () => {
    expect(analyze.sortedObject(obj)).toEqual({min: 1});
}); */

test('min, max, average, length given', () => {
    expect(analyze.sortedObject(obj)).toEqual({
        min: 1,
        max: 8,
        average: 4,
        length: 6
      });
});