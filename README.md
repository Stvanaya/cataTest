## Architecture

## Technologies

| Name         | Type                                            | Justification                                                                                                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ReactJS      | JavaScript library for building user interfaces | Build encapsulated components that manage their own state, then compose them to make complex UIs. React makes it painless to create interactive UIs. Design simple views for each state in the application, and React will efficiently update and render just the right components when data changes. |
| React Router | Declarative routing for React                   | React Router is the standard routing library for React. React Router keeps our UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, etc.                                                                                               |
| TypeScript   | Programming Language                            | TypeScript is easy to understand by all developers since its just JavaScript with extra features that make it more robust                                                                                                                                                                             |
| Sass         | preprocessor scripting language                 | Proporciona una API simple para reutilizar y ampliar las capacidades de CSS                                                                                                                                                                                                                           |
| Storybook    | UI component explorer for frontend developers   | Storybook is an open source tool for developing UI components in isolation. It makes building stunning UIs organized and efficient.                                                                                                                                                                   |

## Level 2: Architecture diagram

![C4 Level 2 - Key-Pass](adr/architecture.svg?sanitize=true)

## Commands

In the project directory, you can run:

### `npm run storybook`

Runs storybook dashboard and serves it on [http://localhost:6006](http://localhost:6006)

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
