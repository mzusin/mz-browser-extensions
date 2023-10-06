## Storage

**Get Data**

```ts
import { getSyncData, getLocalData, getSessionData } from 'mz-browser-extensions';

// required permissions: "storage"

type MyData = {
    name: string;
    value: number;
};

const syncData = await getSyncData<MyData>('my-key');
const locaData = await getLocalData<MyData>('my-key');
const sessionData = await getSessionData<MyData>('my-key');
```

**Save Data**

```ts
import { setSyncData, setLocalData, setSessionData } from 'mz-browser-extensions';

// required permissions: "storage"

type MyData = {
    name: string;
    value: number;
};

await getSyncData<MyData>('my-key', data);
await setLocalData<MyData>('my-key', data);
await setSessionData<MyData>('my-key', data);
```

**Delete Data**

```ts
import { deleteSyncData, deleteLocalData, deleteSessionData } from 'mz-browser-extensions';

// required permissions: "storage"

await deleteSyncData('my-key');
await deleteLocalData('my-key');
await deleteSessionData('my-key');
```

**Clear Storage**

```ts
import { clearSyncStorage, clearLocalStorage, clearSessionStorage } from 'mz-browser-extensions';

// required permissions: "storage"

await clearSyncStorage();
await clearLocalStorage();
await clearSessionStorage();
```

