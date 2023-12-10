# micro-frontends-template

A template for micro-frontends implementation with a run-time integration using [Webpack5 Module Federation](https://webpack.js.org/plugins/module-federation-plugin/).

This is a basic app created with plain JavaScript, but it's scalable and can be easily modified to meet diverse requirements, like for example sharing some dependencies between apps. It also can be modified to use completely different set of frameworks and libraries for each app, so different teams could work on their projects independently at the same time. The full list of possible options can be found on [Module Federation Plugin page](https://webpack.js.org/plugins/module-federation-plugin/#options).

## Project structure:

- Host app that renders content of the Remote apps on [http://localhost:3000](http://localhost:3000)
- Remote1 app that can be run in isolation on [http://localhost:3001](http://localhost:3001)
- Remote2 app that can be run in isolation on [http://localhost:3002](http://localhost:3002)

## Project setup

Install dependencies separately in each sub app (host, remote1 and remote2) with a command: `npm i` or `yarn`.

## Running project

- running the Remote apps (in isolation):

  - go to the Remote (remote1 or remote2) app directory
  - start dev server with a command: `npm start` or `yarn start`

- running the Host (together with Remote apps):

  - run the Remote apps (follow the steps in the point above for both, remote1 and remote2)
  - go to host app directory
  - start dev server with a command: `npm start` or `yarn start`
  - check [http://localhost:3000](http://localhost:3000) in your browser (you should see the content of all micro-frontends there)

**A Note:** The apps will automatically reload if you change the source files. The only exception is when you change `webpack.config` files, so you will need restart dev servers to see these changes.

## License

This project is licensed under the [MIT] License - see the [LICENSE.md](LICENSE) file for details.
