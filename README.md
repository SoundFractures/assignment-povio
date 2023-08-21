This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

The first step is to install the dependencies of the project. To do this, run the following command:

```bash
npm install
# or
yarn
# or
pnpm install
```

You can then run the development server with the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Create an `env.local` file in the root directory of the project and add the environment variables listed in the `.env.example` file. The `env.local` file should look like this:

```bash
NEXT_AUTH_SECRET=SpookySecret
API_URL=https://flowrspot-api.herokuapp.com/api/v1/
NEXTAUTH_URL=http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

The project is structured as follows:

- `__tests__` folder contains the tests
- `app` folder contains the main pages and an api folder for authentication
- `components` folder contains the components
- `enums` folder contains any enums used in the project
- `services` folder contains any hooks that we would reuse throughout the application
- `types` folder contains any types used
- `utils` folder contains any utility functions. Currently it only contains the apiClient config, API Models and validation config
- `store` folder contains the redux store, reducers and actions
- `styles` folder contains the global styles and theme using SCSS (7-1 pattern)
- `public` folder contains the public assets like icons and images

## Testing

To run the tests, run the following command :

```bash
npm run test
# or
yarn test
# or
pnpm test
```

## Learn More about Next.js

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
