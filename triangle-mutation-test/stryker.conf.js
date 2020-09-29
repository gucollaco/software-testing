/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutate: ["./triangle.js"],
  mutator: "javascript",
  packageManager: "yarn",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off",
};
