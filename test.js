import { equal } from 'assert';
import npmProfileDownloads from './index';

it('should npmProfileDownloads', () =>
  equal(npmProfileDownloads('unicorns'), 'unicorns'));

it('should npmProfileDownloads invalid input', () =>
  equal(npmProfileDownloads(), undefined));
