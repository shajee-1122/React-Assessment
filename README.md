# CRUD Operations

## Overview

This is a simple CRUD React App in which we are manipulating todolist record. We have used Redux-toolkit

(Note: Download Redux Dev Tools chrome extension for better visibility of your store: [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en))

### Getting Started
1. Restore the package by running the `npm i` inside the directory where [package.json](package.json) is stored.
2. For Api we have used the [JSON server](https://github.com/typicode/json-server) as suggested  [axiosInstance.ts](./src/axiosInstance.ts)
3. Run `npm run server` on different tab to run the server for backend (where we are using json-server)
3. Run the app using: `npm run start` on different tab as well to run the frontend code. 
4. To build: `npm run build`

### Additional Info
- [store.ts](./src/store.ts) - This is where we configure and register our reducers.
- [index.tsx](./src/index.tsx) - After creating the store file, we configured the index.tsx to use the `<Provider store={store}>`
- [components](./src/components) folder - Where we stored our reusable components like Button, Input & Todo
- [redux](./src/redux/) folder - Where we are taking care of reduxtoolkit slice.
- [thunk](./src/thunk/) folder - Where we are taking care of all thunks.
- [constants.ts](./src/constants.ts) - This is mendatory because we are storing all useable constants here.

### Other Packages Used:
- [Bulma](https://bulma.io/) - User Interface
- [Axios](https://axios-http.com/docs/intro) -  Promise-based HTTP Client for node.js
- [Moment](https://momentjs.com/) - Date formatting
- [React-Toastify](https://github.com/fkhadra/react-toastify#readme) - Toast notification

