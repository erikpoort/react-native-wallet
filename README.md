# react-native-wallet
ReactNative module for Apple Wallet
Version 1.0.0

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
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
Wallet.showAddPassController(passURL);
```