const path = require('path');

const root = process.cwd();
const build = path.resolve(root, 'build');
const src = path.resolve(root, 'src');
const views = path.resolve(root, 'src/Views');
const components = path.resolve(root, 'src/Components');

module.exports = {
    root,
    build,
    src,
    views,
    components
}