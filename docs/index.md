# early
minimal and fast loading plugin for startup time measuring

## Availabililty
[![npm](https://pushrocks.gitlab.io/assets/repo-button-npm.svg)](https://www.npmjs.com/package/early)
[![git](https://pushrocks.gitlab.io/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/early)
[![git](https://pushrocks.gitlab.io/assets/repo-button-mirror.svg)](https://github.com/pushrocks/early)
[![docs](https://pushrocks.gitlab.io/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/early/)

## Status for master
[![build status](https://GitLab.com/pushrocks/early/badges/master/build.svg)](https://GitLab.com/pushrocks/early/commits/master)
[![coverage report](https://GitLab.com/pushrocks/early/badges/master/coverage.svg)](https://GitLab.com/pushrocks/early/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/early.svg)](https://www.npmjs.com/package/early)
[![Dependency Status](https://david-dm.org/pushrocks/early.svg)](https://david-dm.org/pushrocks/early)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/early/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/early/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/early/badges/code.svg)](https://www.bithound.io/github/pushrocks/early)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

```javascript
// Put the following at the start of your module
import * as early from "early";
early.start("myModuleName");
/*
do your loading stuff
*/
early.stop().then((loadingTime:number) => { // loadingTime in milliseconds

}); // stop "early" when your module is ready
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)
