/**
 * Check if you can add passes.
 * @param callback A callback which will receive a boolean
 */
function _canAddPasses(Module, callback) {
  Module.canAddPasses(result => {
    callback(result);
  })
}

/**
 * Show the pass controller for the provided URL.
 * The resolving promise will contain a boolean saying if the pass was added or not.
 * @param passURL URL to pkpass file
 * @return Promise Passing a boolean
 */
function _showAddPassControllerFromString(Module, passURL) {
  return Module.showAddPassControllerFromString(passURL);
}

function _showAddPassControllerFromData(Module, data) {
  return Module.showAddPassControllerFromData(data);
}

module.exports = {
  _canAddPasses,
  _showAddPassControllerFromString,
  _showAddPassControllerFromData,
}
