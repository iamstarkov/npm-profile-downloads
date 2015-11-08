import rest from 'rest-facade';
import Registry from 'npm-stats';
import { map, pipe, prop, filter, is, sum, partial } from 'ramda';

const packages = username => new Promise((resolve, reject) => {
  Registry().user(username).list((err, res) => {
    (!err) ? resolve(res) : reject(err);
  });
});

const downloads = (period, pkg) =>
  new rest.Client('https://api.npmjs.org/downloads/point/:period/:package')
    .get({ period, package: pkg });

export default function npmProfileDownloads(period, username, cb) {
  packages(username)
    .then(map(pkg => downloads(period, pkg)))
    .then(list => Promise.all(list))
    .then(pipe(
      map(prop('downloads')),
      filter(is(Number)),
      sum
    ))
    .then(partial(cb, [null]))
    .catch(cb);
};
