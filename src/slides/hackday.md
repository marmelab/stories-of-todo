#### Linking the Source Version to an Existing Project

If you already have a project in progress, you can develop directly from it.

The instructions below explain how to install the source version of API Platform Admin in your project and contribute a patch.

Your client should already use `@api-platform/admin` and its bootstrap file (usually: `src/App.tsx`) should at least contains: 

```tsx
import React from 'react';
import { HydraAdmin } from '@api-platform/admin';

function App() {
  return (
    <HydraAdmin entrypoint="https://demo.api-platform.com" />
  )
}

export default App
```

Install your own version of `@api-platform/admin`:

```console
cd ..
git clone https://github.com/api-platform/admin.git
```

Link it:

```console
cd admin
yarn link
cd ../<yourproject>
yarn link "@api-platform/admin"
```

Use the React version of your project to build `@api-platform/admin`:

```console
cd node_modules/react/
yarn link
cd ../../../admin
yarn link react
```

Build continuously your `@api-platform/admin` version:

```console
yarn install --force
yarn watch
```

Open a new terminal console with the same path.

Start your client:

```console
cd ../<yourproject>/
yarn install --force
yarn dev --force
```

> You can now hack in the cloned repository of `api-platform-admin`.