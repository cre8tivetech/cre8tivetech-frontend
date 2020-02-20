import Loadable from 'react-loadable';

export default function MyLoadable(opts) {
  return Loadable(Object.assign({
    delay: 600,
    timeout: 10000,
  }, opts));
};