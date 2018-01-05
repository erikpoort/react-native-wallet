import { NativeModules } from 'react-native';
const { RNWalletModule } = NativeModules;

/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
function canAddPasses(callback) {
  RNWalletModule.canAddPasses(callback);
}

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
function showAddPassController(passURL) {
  return RNWalletModule.showAddPassController(passURL);
}

module.exports = {
  canAddPasses,
  showAddPassController,
}
