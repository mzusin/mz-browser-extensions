## Cookies


**getCookie**

```ts
import { getCookie } from 'mz-browser-extensions';

// required permissions: "cookies"

const cookies = await getCookie<MyData>(domain, name);
```

**setCookie**

```ts
import { setCookie } from 'mz-browser-extensions';

// required permissions: "cookies"

await setCookie(url, name, value);
```

**removeCookie**

```ts
import { removeCookie } from 'mz-browser-extensions';

// required permissions: "cookies"

await removeCookie(url, name);
```

