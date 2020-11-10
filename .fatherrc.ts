import { readdirSync } from 'fs';
import { join } from 'path';

const headPkgs = ['internal', 'event'];
const tailPkgs = [];
const otherPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) =>
    pkg.charAt(0) !== '.' && !headPkgs.includes(pkg) && !tailPkgs.includes(pkg),
);

export default {
  target: 'node',
  cjs: { type: 'babel', lazy: true },
  pkgs: [...headPkgs, ...otherPkgs, ...tailPkgs],
};