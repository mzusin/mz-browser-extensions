## Storage


**getSyncData / getLocalData**

```ts
import { getSyncData, getLocalData } from 'mz-browser-extensions';

type MyData = {
    name: string;
    value: number;
};

const syncData = await getSyncData<MyData>('my-key');
const locaData = await getLocalData<MyData>('my-key');
```

**setSyncData / setLocalData**

```ts
import { setSyncData, setLocalData } from 'mz-browser-extensions';

type MyData = {
    name: string;
    value: number;
};

await getSyncData<MyData>('my-key', data);
await setLocalData<MyData>('my-key', data);
```

**deleteSyncData / setLocalData**

```ts
import { deleteSyncData, deleteLocalData } from 'mz-browser-extensions';

await deleteSyncData('my-key');
await deleteLocalData('my-key');
```
