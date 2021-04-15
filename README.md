# Viewtilicious

Viewtilicious is an image search and diplay app utilizing the Flickr API. Viewtilicious enables a user to choose a pre-selected topic or enter a search term to display a gallery of 24 related images.

## How to use Viewtilicious

### Prerequisites

You'll need to do the following before the app is usable:

- Familiarize yourself with [Create React App](https://github.com/facebook/create-react-app).
- Retrieve a Flickr API key
- Create a `config.js` file with the following structure and save it to the `src` folder:

```js
const apiKey = "Your key here";

export default apiKey;
```

- Don't forget to run

```shell
  $ npm install
```

### Run the program

To start the program, in your command line type:

```shell
  $ npm start
```

### Customization

If you'd like to change the default topics, they are defined in `App.js`. Because of the declarative nature of Viewtilicious, you can change all the dependent routes and views just by changing the array of strings returned by the `topics` function.

### Animations

Custom animations have been created for the `Loading` and `Photo` components. The `Loading` component creates a mechanical wave while data is being fetched. Each `Photo` component flips in from the left side of the screen while increasing in opacity. Each component receives an animation delay based on their order of composition. The effect is different based on layout:

- In a four column layout, columns of images flip in from right to left.
- In 2-3 columns, and interesting staggered flip in effect happens similar to a checkerboard.
- In a single column, the images flip in batches of four from bottom to top.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
