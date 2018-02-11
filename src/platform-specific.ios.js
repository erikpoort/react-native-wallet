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
function _showAddPassControllerFromURL(Module, passURL) {
  return Module.showAddPassControllerFromURL(passURL);
}

function _showAddPassControllerFromFile(Module, filePath) {
  return Module.showAddPassControllerFromFile(filePath);
}

module.exports = {
  _canAddPasses,
  _showAddPassControllerFromURL,
  _showAddPassControllerFromFile,
}
