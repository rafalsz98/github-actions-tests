/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["master"],
  plugins: [
    [
      "@bobvanderlinden/semantic-release-pull-request-analyzer",
      {
        labels: {
          prerelease: "prerelease",
          prepatch: "prepatch",
          patch: "patch",
          preminor: "preminor",
          minor: "minor",
          premajor: "premajor",
          major: "major",
        },
      },
    ],
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git",
  ],
};
