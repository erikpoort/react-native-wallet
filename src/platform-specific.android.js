/**
 * Android can't add passes
 * @param callback A callback which will receive false
 */
function _canAddPasses(Module, callback) {
  callback(false)
}

/**
 * Android can't add passes
 * @param passURL URL to pkpass file
 * @return Promise Always rejecting
 */
function _showAddPassControllerFromURL(Module, passURL) {
  return Promise.reject("Android can't add passes")
}

function _showAddPassControllerFromFile(Module, filepath) {
  return Promise.reject("Android can't add passes")
}

function _passes(Module, callback) {
  callback("Android can't list passes", null)
}

module.exports = {
  _canAddPasses,
  _showAddPassControllerFromURL,
  _showAddPassControllerFromFile,
  _passes
}
