const path = require("path");

const buildEslintCommand = (filenames) => `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(" --file ")}`;

module.exports = {
  "*.{html,jsx,tsx}": "markuplint",
  "*.{css,scss}": "stylelint --fix",
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{html,css,scss,js,ts,jsx,tsx}": "prettier --write",
};
