import path from 'path';
const basePath = path.join(__dirname, '../../');
export default {
    filename:'laoui',
    /**
     * 路径地址
     */
    paths: {
        fonts: path.join(basePath, 'src/styles/fonts'),
        dist: path.join(basePath, 'dist'),
        doc: path.join(basePath, 'doc/laoui')
    },
    /**
     * Webpack 配置
     */
    webpack: {
        entry: [path.join(basePath, 'src/laoui.js')]
    }
};
