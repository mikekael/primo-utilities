# mikeprimo-utils

Small, tree-shakeable TypeScript utilities library. Exports are preserved per-file so consumers can import only what they need (e.g., `import { chunk } from 'mikeprimo-utils/array'`).

## Features

- Tiny, focused utility functions
- ESM + CJS builds
- TypeScript types (`.d.ts`)
- Vite-based fast builds with `preserveModules` for minimal bundle footprint

## Installation

npm:

```bash
npm install mikeprimo-utils
```

yarn:

```bash
yarn add mikeprimo-utils
```

## Usage

Import whole module (may include all exports):

```ts
import * as utils from "mikeprimo-utils";
```

Prefer subpath imports for smallest bundle:

```ts
import { chunk } from "mikeprimo-utils/array";
import { camelCase } from "mikeprimo-utils/string";
```

## API Examples

```ts
import { chunk } from "mikeprimo-utils/array";

const result = chunk([1, 2, 3, 4], 2); // [[1,2],[3,4]]
```

```ts
import { camelCase } from "mikeprimo-utils/string";

camelCase("hello_world-test"); // 'helloWorldTest'
```

## Development

Install dev deps and run build:

```bash
npm install
npm run build
```

Dev server:

```bash
npm run dev
```

Run tests:

```bash
npm run test
```

## Build output

- ESM bundle: `dist/index.esm.js` and per-file ESM outputs (e.g., `dist/esm/...`)
- CJS bundle: `dist/index.cjs.js` and per-file CJS outputs (e.g., `dist/cjs/...`)
- Types: `dist/index.d.ts` (and per-file declarations)

## Contributing

- Open issues or PRs.
- Include tests for new utilities.
- By contributing you license your contributions under the project's MIT license.

## License

MIT — see LICENSE file.

Debugging tip: If a consumer gets an unexpectedly large bundle, ensure they import from subpaths (e.g., `'mikeprimo-utils/array'`) and confirm your build used `preserveModules` so per-file outputs exist.
