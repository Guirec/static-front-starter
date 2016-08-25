# Static front starter
A simple way to start your static integration with Pug as template engine, Stylus for styles and Gulp for automation.

## How it works

All sources files are in the `src` folder and all the results of the compilation will goes in a `dist` folder.

## Installation

Make sure you have [Node.js](https://nodejs.org) to be able to use `npm` command and run `npm install`.

## Usage

You can use the command `npm run build` to compile templates, styles, scripts and images. It will compile once and stop here.

If you want to build but continue to watch for changes, so the build will be run every time a source file is modified or added, you can use `npm run watch`. In this case, [Browsersync](https://www.browsersync.io/) is used to reload automatically at every change and allows synchronised browser testing.

## Stylus

[Stylus](http://stylus-lang.com/) allow to omit braces, colons and semi-colons but we will still use them. It seem to me more readable and avoid to go to far form CSS. It's recommended to use a linter like stylint for Stylus in your favorite editor, the .stylintrc is here for that.
