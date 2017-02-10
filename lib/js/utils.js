'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* globals window */

/**
* This Utils object contains util function(s) needed by this project.
* All the functions in this file can be moved to fhir-client-cerner-additions.js file,
* however having them here make it easier to write tests.
*/
var Utils = {

  /**
  * Determine if application is rendered in PowerChart.
  * @return null or true/false
  */
  isPowerChart: function isPowerChart() {
    return window.external && typeof window.external.DiscernObjectFactory !== 'undefined';
  }
};

exports.default = Utils;