import Utils from 'js/utils';
import FhirClientCernerAdditions from 'js/fhir-client-cerner-additions'

describe('Utils', () => {
  describe('#isPowerChart', () => {
    beforeEach(() => {
      delete window.external;
    });
    
    it('returns undefined when window.external is undefined', () => {
      expect(Utils.isPowerChart()).toBe(undefined);
    });

    it('returns null when object is null', () => {
      window.external = null;
      expect(Utils.isPowerChart()).toBe(null);
    });

    it('returns false when DiscernObjectFactory is undefined', () => {
      window.external = jasmine.createSpy('window.external');
      expect(Utils.isPowerChart()).toBe(false);
    });

    it('returns true when DiscernObjectFactory is valid', () => {
      window.external = jasmine.createSpy('window.external');
      window.external.DiscernObjectFactory = jasmine.createSpy('window.external.DiscernObjectFactory');
      expect(Utils.isPowerChart()).toBe(true);
    });
  });
});

describe('FhirClientCernerAdditions', () => {
  describe('#setFullSessionStorageSupport', () => {
    beforeEach(() => {
      delete window.FHIR;
      delete window.external;
    });

    it('sets fullSessionStorageSupport to true when not executing in PowerChart', () => {
      window.FHIR = {oauth2: {settings: {}}};
      FhirClientCernerAdditions.setFullSessionStorageSupport();
      expect(FHIR.oauth2.settings.fullSessionStorageSupport).toBe(true);
    });

    it('sets fullSessionStorageSupport to false when executing in PowerChart', () => {
      window.FHIR = {oauth2: {settings: {}}};
      window.external = {DiscernObjectFactory: jasmine.createSpy('DiscernObjectFactory')};
      FhirClientCernerAdditions.setFullSessionStorageSupport();
      expect(FHIR.oauth2.settings.fullSessionStorageSupport).toBe(false);
    });
  });
});

