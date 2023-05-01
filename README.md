# Learn Webpack

## Prerequisite

> Make sure to download and install latest node package

## Create empty folder

```sh
mkdir learn-webpack
cd learn-webpack
```

## Initialize Git

```sh
git init
```

## Initialize npm

```sh
npm init -y
```

## Include webpack and webpack-cli

```sh
npm install -D webpack webpack-cli
```

## Create `src/index.js` file which webpack default to look for entry file

```sh
mkdir src
cd src
touch index.js
```

## Run `npx webpack` to bundle our `src/index.js` file and it defaults to `dist/main.js` file

## Create `index.html` file in the root path, create html default skeleton and include bundled script file. Open `index.html` file on any browser.

```sh
touch index.html
```

## To watch for the changes reflect instantly

```sh
npx webpack --watch
```

## Creating own webpack configuration file

```sh
touch webpack.config.js
```

## Install `html-webpack-plugin` and `webpack-dev-server`

```sh
npm install -D html-webpack-plugin webpack-dev-server
```

## Install react and react-dom

```sh
npm install react react-dom
```

npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react

npm i -D css-loader style-loader

npm i -D sass sass-loader

npm i -D mini-css-extract-plugin

npm i -D clean-webpack-plugin

npm i -D webpack-merge
