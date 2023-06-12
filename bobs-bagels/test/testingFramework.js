const assertEquals = (actualOutput, expectedOutput) => actualOutput === expectedOutput;

const assertNaN = actualOutput => isNaN(actualOutput);

module.exports = {
  assertEquals,
  assertNaN
}

