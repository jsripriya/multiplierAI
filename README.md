RestAPI  – How to do CRUD RESTAPI Using MERNStack.

Overview
npm start
If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

(npx comes with npm 5.2+ and higher, see instructions for older npm versions)

Then open http://localhost:3000/ to see your app.
When you’re ready to deploy to production, create a minified bundle with npm run build.

npm start

Get Started Immediately
You don’t need to install or configure tools like webpack or Babel.
They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

Creating an App
You’ll need to have Node 14.0.0 or later version on your local development machine (but it’s not required on the server). We recommend using the latest LTS version. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

npx
npx create-react-app my-app
(npx is a package runner tool that comes with npm 5.2+ and higher, see instructions for older npm versions)

npm
npm init react-app my-app
npm init <initializer> is available in npm 6+

Yarn
yarn create react-app my-app
yarn create <starter-kit-package> is available in Yarn 0.25+

It will create a directory called my-app inside the current folder.
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

server
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   
│   ├── index.html
│ 
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
No configuration or complicated folder structures, only the files you need to build your app.
Once the installation is done, you can open your project folder:

cd my-app
Inside the newly created project, you can run some built-in commands:

npm start or yarn start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

The page will automatically reload if you make changes to the code.
You will see the build errors and lint warnings in the console.

Build errors

npm test or yarn test
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

Read more about testing.

npm run build or yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

User Guide
You can find detailed instructions on using Create React App and many tips in its documentation.

How to Update to New Versions?
Please refer to the User Guide for this and other information.

A build script to bundle JS, CSS, and images for production, with hashes and sourcemaps.
An offline-first service worker and a web app manifest, meeting all the Progressive Web App criteria. (Note: Using the service worker is opt-in as of react-scripts@2.0.0 and higher)
Hassle-free updates for the above tools with a single dependency.
Check out this guide for an overview of how these tools fit together.

The tradeoff is that these tools are preconfigured to work in a specific way. If your project needs more customization, you can "eject" and customize it, but then you will need to maintain this configuration.
