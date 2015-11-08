import rest from 'rest-facade';
import Registry from 'npm-stats';
import { map, pipe, prop, filter, is, sum,
  partial, join, splitEvery, toPairs, tail, flatten } from 'ramda';

const packages = username => new Promise((resolve, reject) => {
  Registry().user(username).list((err, res) => {
    (!err) ? resolve(res) : reject(err);
  });
});

const api = 'https://api.npmjs.org';
const downloads = (period, pkg) =>
  new rest.Client(`${api}/downloads/point/:period/:package`)
    .get({ period, package: pkg });

export default function npmProfileDownloads(period, username, cb) {
  packages(username)
    .then(pipe(splitEvery(200), map(join(','))))
    .then(map(bulk => downloads(period, bulk)))
    .then(bulk => Promise.all(bulk))
    .then(pipe(map(pipe(toPairs, map(tail), flatten)), flatten))
    .then(pipe(map(prop('downloads')), filter(is(Number))))
    .then(sum)
    .then(partial(cb, [null]))
    .catch(cb);
};
