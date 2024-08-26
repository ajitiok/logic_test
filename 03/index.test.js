const isPalindrome = require('./index'); // Sesuaikan dengan path file Anda

// Kasus uji
const testCases = [
  { input: "kasur rusak", expected: true },
  { input: "ikan naki", expected: true },
  { input: "Hello Dunia", expected: false },
];

// Menjalankan tes
testCases.forEach(({ input, expected }) => {
  test(`isPalindrome(${input}) should return ${expected}`, () => {
    expect(isPalindrome(input)).toBe(expected);
  });
});