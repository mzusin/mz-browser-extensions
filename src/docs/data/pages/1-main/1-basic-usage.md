## Basic Usage

Install the module from npm:

```shell
npm install mz-browser-extensions
```

Or using Yarn:

```shell
yarn add mz-browser-extensions
```

The import any function like **getActiveTab**:
```js
import { getActiveTab } from 'mz-browser-extensions';

const activeTab = await getActiveTab();
console.log('activeTab', activeTab);
```