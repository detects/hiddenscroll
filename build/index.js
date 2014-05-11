/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  var definition = module.definition;
  if (definition) {
    definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

require.register("./index.js", function (exports, module) {

var el = document.createElement('div')
el.style.width = '100px'
el.style.height = '100px'
el.style.overflow = 'scroll'
el.style.visibility = 'hidden'

var body = document.body
body.appendChild(el)
var supported = el.offsetWidth === el.clientWidth
body.removeChild(el)

document.documentElement.className += ' ' + (supported ? '' : 'no-') + 'hiddenscroll'

module.exports = supported

})

require("./index.js");
