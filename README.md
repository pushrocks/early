# early
minimal and fast loading plugin for startup time measuring

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/early)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/early)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/early)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/early/)

## Status for master
[![build status](https://gitlab.com/pushrocks/early/badges/master/build.svg)](https://gitlab.com/pushrocks/early/commits/master)
[![coverage report](https://gitlab.com/pushrocks/early/badges/master/coverage.svg)](https://gitlab.com/pushrocks/early/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/early.svg)](https://david-dm.org/pushrocks/early)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/early/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/early/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/early/badges/code.svg)](https://www.bithound.io/github/pushrocks/early)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage

```typescript
// Put the following at the start of your module
import * as early from "early";
early.start("myModuleName");
/*
do your loading stuff
*/
early.stop().then((loadingTime:number) => { // loadingTime in milliseconds

}); // stop "early" when your module is ready
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
