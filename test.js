module.exports = {
  extends: [
    './index',
  ].map(require.resolve),
  rules: {
    // open a PR per rule change
    // ****.com/stash/projects/UIE/repos/eslint-config-axp/pull-requests?create
  },
};