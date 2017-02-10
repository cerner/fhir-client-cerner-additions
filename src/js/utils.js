/* globals window */

/**
* This Utils object contains util function(s) needed by this project.
* All the functions in this file can be moved to fhir-client-cerner-additions.js file,
* however having them here make it easier to write tests.
*/
const Utils = {

  /**
  * Determine if application is rendered in PowerChart.
  * @return null or true/false
  */
  isPowerChart: () => (window.external && typeof window.external.DiscernObjectFactory !== 'undefined'),
};

export default Utils;
