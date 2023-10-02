## Tabs

**getActiveTab**

```ts
import { getActiveTab } from 'mz-browser-extensions';

const activeTab = await getActiveTab();
console.log('activeTab', activeTab);
```

**getTabZoom**

```ts
import { getTabZoom } from 'mz-browser-extensions';

const tabId = ....
const zoom: number = await getTabZoom(tabId);
console.log('zoom', zoom);
```