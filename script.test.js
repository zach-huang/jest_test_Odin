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