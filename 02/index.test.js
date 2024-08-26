const sortAscOrDesc = require("./index");

const testCases = [
  { input: [5, 3, 11, 8, 4, 2], sort: "asc", expected: [2, 3, 4, 5, 8, 11] },
  { input: [5, 3, 11, 8, 4, 2], sort: "desc", expected: [11, 8, 5, 4, 3, 2] },
  { input: [1, 1, 1], sort: "desc", expected: [1, 1, 1] },
  { input: [10, -5, 2, 3], sort: "desc", expected: [10, 3, 2, -5] },
];

testCases.forEach(({ input, sort, expected }) => {
  test(`sortAscOrDesc(${input}, "${sort}") should return ${expected}`, () => {
    expect(sortAscOrDesc([...input], sort)).toEqual(expected);
  });
});
