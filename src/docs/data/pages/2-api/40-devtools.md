## DevTools

**Create DevTools Panel**

```ts
import { createDevtoolsPanel } from 'mz-browser-extensions';

// Manifest: 
// "devtools_page": "devtools.html"
// "host_permissions": [ "<all_urls>" ]

const panel = await createDevtoolsPanel('Panel Title', 'img/panel-icon.png', 'html/panel.html');
```
