# react-scaffold
A scaffolding for a basic React web app and its tooling

Why This Exists
---------------
To build a modern React web application, there's a lot of setup you have to do. This includes tracking down the right dependencies, setting up a build pipeline, adding testing/linting abilities, and more. To make it easier to quickly get my future React projects up and running, I created this scaffold that includes everything I need to get off the ground quickly. That includes...

* A `package.json` that makes pulling in the required dependencies as simple as `npm install`
* A Gulp-powered build pipeline that will build, minify, and compress all the required JS and LESS
* Support for ES6 with `babel` and `babel-polyfill`
* A barebones React app that uses Redux as its state container
* Some basic Jest tests

Setup
-----
1. Install [Node.js](https://nodejs.org/) which includes [Node Package Manager](https://www.npmjs.org/)
1. Install [gulp](https://github.com/gulpjs/gulp) by running `npm rm --global gulp && npm install --global gulp-cli`. This removes any version of `gulp` that was previously installed globally so it doesn't conflict with `gulp-cli`.
1. Install all node dependencies by running `npm install`. This includes React, Babel, and a bunch of libraries for the tooling.

Running
-------

From the project's root, run `gulp`. This will build the project's files, set up a local webserver at `localhost:8080`, and watch the LESS/JS files for changes to automatically rebuild them.
