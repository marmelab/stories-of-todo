<a href="https://github.com/storybooks/storybook" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg"></a>

# Stories of Todo

Using a Todo List application, this project demonstrates how to use [Storybook](https://storybook.js.org/) to develop components in isolation, document them, and test them.

Made with:
 - [Vite](https://vitejs.dev/),
 - [React](https://react.dev/),
 - [TypeScript](https://www.typescriptlang.org/), 
 - [Storybook](https://storybook.js.org/), 
 - [daisyUI](https://daisyui.com/),
 - [Api Platform](https://api-platform.com/) (backend API),
 - [FakeRest](https://github.com/marmelab/FakeRest) (mock API),
 - [TanStack Query](https://tanstack.com/query/latest),
 - [React Hook Form](https://react-hook-form.com/)

## Getting Started

### Prerequisites

- [make](https://www.gnu.org/software/make/)
- [Node.js](https://nodejs.org/en/) (20.x or newer)
- [npm](https://www.npmjs.com/)
- [docker](https://www.docker.com/) and [docker-compose](https://docs.docker.com/compose/)

### Installation

Run the following command to install the project dependencies:

```bash
make install
```

### Development

#### Frontend

##### Isolated components

The frontend components are built in isolation thanks to Storybook. It mokes the API with [FakeRest](https://github.com/marmelab/FakeRest#msw) in conjuction with [MSW](https://mswjs.io/). It means that you will be able to see fetch requests in your browser dev tools 🤩.

This method is the recommended way to develop components, document them, and test them.

To develop the frontend with Storybook, run the following command:

```bash
make storybook
```

Navigate to the url displayed in the terminal to see the Storybook interface.

##### Full Application

The final point of this application is to request a real API. To achieve this, an Api Platform server is provided.
It is useful to test the fronted application works great with a real API.

To run the API and the application, run the following command:

```bash
make dev
```

> Before accessing the application, navigate to the https://localhost and make sure to accept the self-signed certificate. Otherwise, the application will not be able to fetch the API.

You can also access the API documentation at https://localhost/docs

Then, navigate to the url displayed in the terminal to see the application running.

To stop the application, press `Ctrl+C` in the terminal and run the following command:

```bash
make stop-api
```

#### Testing

Tests are written in Storybook [Play functions](https://storybook.js.org/docs/writing-stories/play-function). Storybook [test runner](https://storybook.js.org/docs/writing-tests/test-runner) turns all of your stories into executable tests. It is powered by [Jest](https://jestjs.io/) and [Playwright](https://playwright.dev/).

Before running tests, make sure to install playwright with the following command:
```bash
npx playwright install --with-deps
```

To run the [interactions-tests](https://storybook.js.org/docs/writing-tests/interaction-testing), run the following command:
```bash
make storybook # if not already running
make interaction-test
```

## Run Presentation

To run the presentation, run the following command:

```bash
make storybook-build
make storybook-serve
# in another terminal
make preview
```