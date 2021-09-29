const { reverseString } = require("./reverseString");

test("should fucntion exists", () => {
  expect(reverseString).toBeDefined();
});

test("should reverse a string", () => {
  expect(reverseString("hola")).toBe("aloh");
});

test("should reverse a string with uppercase", () => {
  expect(reverseString("Hola")).toBe("aloh");
});
