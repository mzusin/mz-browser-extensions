## Screenshots

**captureVisibleAreaScreenshot**

```ts
import { captureVisibleAreaScreenshot } from 'mz-browser-extensions';

const dataUrl = await captureVisibleAreaScreenshot('png');
console.log('dataUrl', dataUrl);
```