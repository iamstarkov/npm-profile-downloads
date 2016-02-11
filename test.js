import test from 'tape';
import npmProfileDownloads from './index';

test('npmProfileDownloads', { timeout: 30000 }, ({ equal, assert, end }) => {
  npmProfileDownloads('last-month', 'sindresorhus').then(res => {
    equal(typeof res, 'number', 'should be number');
    assert(res > 300000000, 'should greater 300000000');
    end();
  });
});
