# react-native-wallet
ReactNative module for Apple Wallet
Version 1.0.8

## Installation

```bash
npm install --save react-native-wallet
```
```bash
react-native link react-native-wallet
```

## Usage
```js
// Import
import Wallet from 'react-native-wallet';
```

The following calls are implemented:
```js
/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
Wallet.canAddPasses(added => {
	// Handle rest
});

/**
 * Check if you have any passes.
 * @param callback A callback which will receive an error or the pass serials
 */
Wallet.passes((err, passes) => {
	// Handle rest
});

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
Wallet.showAddPassControllerFromURL(passURL);

/**
 * Show the pass controller for the provided filepath.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param filepath File path pkpass file
 * @return Promise Passing a boolean
 */
Wallet.showAddPassControllerFromFile(passURL);
```

### Usage with File
- Download .pkpass using [react-native-fetch-blob](https://github.com/wkh237/react-native-fetch-blob)
- pass resulting file to showAddPassControllerFromFile

```jsx
const sharePkPass = async () => {
   try
    const payload = {}; // custom payload
    const result = await RNFetchBlob.config({
      fileCache : true,
      // appendExt : 'pkpass',
    })
    .fetch(
      'POST',
      url,
      {
      },
      payload
    );

    const resultShare = await showAddPassControllerFromFile(result.data);
   } catch (err) {
    console.log('error on share pkpass: ', err)
    }
}
```

