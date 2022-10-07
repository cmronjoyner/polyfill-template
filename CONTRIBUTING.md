# Contributing to My Polyfill

Ideas, issues, and pull-requests are welcome!

- [**Github Issues**](https://github.com/oddbird/<POLYFILL-REPO>/issues/)
  are the best place to request a feature, file a bug, or just ask a question.
  Also a great place to discuss possible features before you submit a PR.
- **Pull Requests** are a big help, if you're willing to jump in and make things
  happen. For a bugfix, or documentation, just jump right in. For major changes
  or new features, it's best to discuss in an issue first.

## Conduct

Please follow the [OddBird Code of Conduct](https://www.oddbird.net/conduct/).

## Development

- Clone the repository.
- Install dependencies: `yarn install`.
- Start dev server: `yarn serve`. Visit `localhost:3000`.

## Code style

JS code is formatted with prettier, and CSS is formatted with stylelint.

- Lint: `yarn lint:ci`
- Format & lint: `yarn lint`

We recommend setting up your IDE to automatically format code for you.

## Testing

Unit tests and end-to-end tests are available in the `tests/` folder.

- Run all tests: `yarn test`
- Run unit tests: `yarn test:unit`
- Run end-to-end tests:
  - Configure Playwright (this step is only required once or when the version of
    `@playwright/test` changes in package.json):
    `yarn dlx playwright install --with-deps`
  - Run tests (Chromium only): `yarn test:e2e`
  - Run tests (Chromium, Firefox & Webkit): `yarn test:e2e:ci`
