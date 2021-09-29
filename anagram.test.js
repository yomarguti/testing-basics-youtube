const { isAnagram } = require("./anagram");

test("should function exists", () => {
  expect(isAnagram).toBeDefined();
});

test("should cinema be an anagram of iceman", () => {
  expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

test("should Dormitory be an anagram of dirty room##", () => {
  expect(isAnagram("Dormitory", "dirty room##"));
});

test("should Hello not to be an anagram of Aloha", () => {
  expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
