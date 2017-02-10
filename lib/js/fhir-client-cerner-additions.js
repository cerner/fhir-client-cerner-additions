'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Wrapper object containing additional feature or settings
* to the open source version of fhir-client.js file.
*/
var FhirClientCernerAdditions = {

  /**
  * Override fullSessionStorageSupport flag in fhir-client.js (src/client/bb-client.js) file.
  * The value depends on whether the page is loaded in PowerChart or
  * a regular browser that supports sessionStorage API without session being shared across tabs.
  */
  setFullSessionStorageSupport: function setFullSessionStorageSupport() {
    FHIR.oauth2.settings.fullSessionStorageSupport = !_utils2.default.isPowerChart();
  }
}; /* globals FHIR */
exports.default = FhirClientCernerAdditions;