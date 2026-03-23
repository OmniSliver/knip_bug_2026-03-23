# Reproduces a bug in Knip v6.0.3

- To install dependencies, run `npm install`.
- To reproduce the bug, run `npm run knip`.
- You can check that the page works by running `npm run build` and then `npm run start` and navigating to `http://localhost:3000/`.

The bug is that Knip reports that `src/PageJS/SubPageJS/index.js` is not used because its lazy-loaded in a `.js` file.
