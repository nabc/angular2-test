<<<<<<< HEAD
### Quick start
**Make sure you have Node version >= 5.0 and yarn >= 3**

```bash
# install the repository with yarn
yarn install

# start the server
yarn start

# use Hot Module Replacement
yarn run server:dev:hmr
```
go to [http://0.0.0.0:3000](http://0.0.0.0:3000) or [http://localhost:3000](http://localhost:3000) in your browser

# Getting Started
## Dependencies
What you need to run this app:
* `node` and `yarn` (`brew install node`)
* Ensure you're running the latest versions Node `v5.x.x`+ and yarn `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file) 

## Running the app
After you have installed all dependencies you can now run the app. Run `yarn run server` to start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. The port will be displayed to you as `http://0.0.0.0:3000` (or if you prefer IPv6, if you're using `express` server, then it's `http://[::1]:3000/`).

### server
```bash
# development
yarn run server
# production
yarn run build:prod
yarn run server:prod
```

## Other commands

### build files
```bash
# development
yarn run build:dev
# production (jit)
yarn run build:prod
```

### hot module replacement
```bash
yarn run server:dev:hmr
```

### watch and build files
```bash
yarn run watch
```

### run unit tests
```bash
yarn test
```

### watch and run our tests
```bash
yarn run watch:test
```

### run end-to-end tests
```bash
# update Webdriver (optional, done automatically by postinstall script)
yarn run webdriver:update
# this will start a test server and launch Protractor
yarn run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test both your JIT and AoT builds
yarn run ci
```

### run Protractor's elementExplorer (for end-to-end)
```bash
yarn run e2e:live
```
# External Stylesheets
Any stylesheets (Sass or CSS) placed in the `src/styles` directory and imported into your project will automatically be compiled into an external `.css` and embedded in your production builds.

For example to use Bootstrap as an external stylesheet:
1) Create a `styles.scss` file (name doesn't matter) in the `src/styles` directory.
2) `yarn add` the version of Boostrap you want.
3) In `styles.scss` add `@import 'bootstrap/scss/bootstrap.scss';`
4) In `src/app/app.module.js` add underneath the other import statements: `import '../styles/styles.scss';`
=======
# angular2-test
>>>>>>> 8113691f2dba588c3ec3ccb4bf55e61e9c48d42a
