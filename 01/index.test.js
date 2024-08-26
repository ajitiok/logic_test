const outputFishBashLoop = require("./index");

test("Fish Bash Output Loop", () => {
  expect(outputFishBashLoop(1)).toEqual([1]);
  expect(outputFishBashLoop(5)).toEqual([1, 2, "fish", 4, "bash"]);
  expect(outputFishBashLoop(15)).toEqual([
    1,
    2,
    "fish",
    4,
    "bash",
    "fish",
    7,
    8,
    "fish",
    "bash",
    11,
    "fish",
    13,
    14,
    "fish bash",
  ]);
  expect(outputFishBashLoop(20)).toEqual([
    1,
    2,
    "fish",
    4,
    "bash",
    "fish",
    7,
    8,
    "fish",
    "bash",
    11,
    "fish",
    13,
    14,
    "fish bash",
    16,
    17,
    "fish",
    19,
    "bash",
  ]);
});
