import script from "./script.js";

//capitalize tests
it("Capitalized String", () => {
  expect(script.capitalize("hello")).toBe("Hello");
});

it("Capitalized Number", () => {
  expect(script.capitalize(2)).toBe("Not a String");
});

it("Capitalized Undefined", () => {
  expect(script.capitalize(undefined)).toBe("Not a String");
});

it("Capitalized Number", () => {
  expect(script.capitalize(null)).toBe("Not a String");
});

//reverseString tests

it("Reverse String", () => {
  expect(script.reverseString("this")).toBe("siht");
});

it("Reverse String with Spaces", () => {
  expect(script.reverseString("Greetings from Earth")).toBe(
    "htraE morf sgniteerG"
  );
});

it("Reverse Number", () => {
  expect(script.reverseString(25)).toBe("Not a String");
});

it("Reverse Null", () => {
  expect(script.reverseString()).toBe("Not a String");
});

//calculator tests

it("Addition", () => {
  expect(script.calculator.add(1, 2)).toBe(3);
});

it("Subtraction", () => {
  expect(script.calculator.subtract(1, 2)).toBe(-1);
});

it("Multiplication", () => {
  expect(script.calculator.multiply(1, 2)).toBe(2);
});

it("Division", () => {
  expect(script.calculator.divide(1, 2)).toBe(0.5);
});

//analyze array tests

it("Array Average", () => {
  expect(script.analyzeArray.avg([1, 8, 3, 4, 2, 6])).toBe(4);
});

it("Array Min", () => {
  expect(script.analyzeArray.min([1, 8, 3, 4, 2, 6])).toBe(1);
});

it("Array Max", () => {
  expect(script.analyzeArray.max([1, 8, 3, 4, 2, 6])).toBe(8);
});

it("Array Average", () => {
  expect(script.analyzeArray.length([1, 8, 3, 4, 2, 6])).toBe(6);
});

//caesar cipher tests

it("CC single word", () => {
  expect(script.caesarCipher("hello", 3)).toBe("khoor");
});

it("CC late alphabets", () => {
  expect(script.caesarCipher("yesterday", 3)).toBe("bhvwhugdb");
});

it("CC Capitals and spaces", () => {
  expect(script.caesarCipher("today I went for a run", 3)).toBe(
    "wrgdb L zhqw iru d uxq"
  );
});

it("CC Mixed Case", () => {
  expect(script.caesarCipher("THisISmyTest", 3)).toBe("WKlvLVpbWhvw");
});

it("CC Different shift value", () => {
  expect(script.caesarCipher("THisISmyTest", 10)).toBe("DRscSCwiDocd");
});

it("CC Shift value over 26", () => {
  expect(script.caesarCipher("THisISmyTest", 27)).toBe(
    "Pick a shift number between 0 and 26"
  );
});
