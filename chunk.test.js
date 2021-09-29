const { chunkArray } = require("./chunk");

test("should function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("should chunk an array of 10 values with length of 2", () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 5;

  const chunkedNumbers = chunkArray(numbers, len);

  expect(chunkedNumbers.length).toBe(2);
  expect(chunkedNumbers).not.toBeNull();
  expect(chunkedNumbers).toEqual([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
  ]);
});

test("should return an empty array", () => {
  expect(chunkArray([], 2)).toHaveLength(0);
});
