import test from 'tape';
import npmProfileDownloads from './index';

test('npmProfileDownloads', { timeout: 30000 }, ({ equal, assert, end } = t) => {
  npmProfileDownloads('last-month', 'sindresorhus', (err, res) => {
    if (err) throw err;
    equal(typeof res, 'number', 'should be number');
    assert(res > 300000000, 'should greater 300000000');
    end();
  });
});
