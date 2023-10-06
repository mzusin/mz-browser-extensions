## Files

**Download**

```ts
import { download } from 'mz-browser-extensions';

// required permissions: "downloads"

const url = 'https://....';
const filename = 'my-file.txt';

// Start download
await download(url, filename);
```

**Load File**

```ts
import { getFile } from 'mz-browser-extensions';

const fileTypes = [
    {
        description: 'Text file',
        accept: {
            'text/plain': ['.txt']
        }
    },
];

const res = await getFile(fileTypes);

/*
Result:
------- 
{
    name: string,
    text: string,
}
*/
```

**Save File**

```ts
import { saveFile } from 'mz-browser-extensions';

const fileTypes = [
    {
        description: 'Text file',
        accept: {
            'text/plain': ['.txt']
        }
    },
];

const fileName = 'my-file.txt';
const text = '... any text ...';

await saveFile(fileTypes, fileName, text);
```
