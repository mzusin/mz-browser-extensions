## DevTools

**Create DevTools Panel**

```ts
import { createDevtoolsPanel } from 'mz-browser-extensions';

// Manifest: "devtools_page": "devtools.html"

const panel = await createDevtoolsPanel('Panel Title', 'img/panel-icon.png', 'html/panel.html');
```
