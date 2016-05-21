# early
minimal and fast loading animation for modules that need a little starting time.

## Usage

```typescript
// Put the following at the start of your module
import * as early from "early";
early.start("myModuleName");
/*
do your loading stuff
*/
early.stop(); // stop "early" when your module is ready
```

