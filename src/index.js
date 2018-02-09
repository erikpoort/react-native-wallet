import { NativeModules } from 'react-native';
const { RNWalletModule } = NativeModules;
import { _canAddPasses, _showAddPassControllerFromURL, _showAddPassControllerFromData } from './platform-specific';

/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
function canAddPasses(callback) {
  _canAddPasses(RNWalletModule, callback)
}

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
function showAddPassControllerFromURL(passURL) {
  return _showAddPassControllerFromString(RNWalletModule, passURL);
}

function showAddPassControllerFromData(data) {
  return _showAddPassControllerFromData(RNWalletModule, data);
}

module.exports = {
  canAddPasses,
  showAddPassControllerFromURL,
  showAddPassControllerFromData
}
