/* globals FHIR */
import Utils from './utils';

/**
* Wrapper object containing additional feature or settings
* to the open source version of fhir-client.js file.
*/
const FhirClientCernerAdditions = {

  /**
  * Override fullSessionStorageSupport flag in fhir-client.js (src/client/bb-client.js) file.
  * The value depends on whether the page is loaded in PowerChart or
  * a regular browser that supports sessionStorage API without session being shared across tabs.
  */
  setFullSessionStorageSupport: () => {
    FHIR.oauth2.settings.fullSessionStorageSupport = !Utils.isPowerChart();
  },
};

export default FhirClientCernerAdditions;

