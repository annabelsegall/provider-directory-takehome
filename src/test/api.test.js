import { fetchProvider, fetchProviders } from '../providers/api.js';
import assert from 'assert';


  describe('API', function () {
    describe('fetchProviders', function () {
      it('should return empty array with no inputs', async() => {
        fetchProviders().then( (res) => {
          assert.equal(res, []);
        })
      });
      it('should return empty array with null inputs', async() => {
        fetchProviders(null, null).then( (res) => {
          assert.equal(res, []);
        })
      });
      it('should return empty array with fake region and language', async() => {
        fetchProviders('FakePlace', 'FakeLang').then( (res) => {
          assert.equal(res, []);
        })
      });
      it('should return zero results for real region and lang, but no pairing', async() => {
        fetchProviders('Ontario', 'French').then( (res) => {
          assert.equal(res, []);
        })
      });
      it('should return non-zero results for real region and lang, but no pairing', async() => {
        fetchProviders('Ontario', 'English').then((res) => {
          assert.equal(res.length, 2);
        })
      });
    });

    describe('fetchProvider', function () {
      it('should return empty array with no inputs', async() => {
        fetchProvider().then((res) => {
          assert.equal(res, undefined);
        })
      });
      it('should return one result for real id', async() => {
        fetchProvider('1').then((res) => {
          assert.equal(res, 2);
        })
      });
      it('should return no result for fake id', async() => {
        fetchProvider('g').then((res) => {
          assert.equal(res, 2);
        })
      });
    });
  });