import path from 'path';
const basePath = path.join(__dirname, '../../');
export default {
    /**
     * 端口
     */
    serverPort: 4000,
    /**
     * 路径地址
     */
    paths: {
        doc: path.join(basePath, 'doc'),
        site: path.join(basePath, 'dist-doc')
    },
    /**
     * Webpack 配置
     */
    webpack: {
        entry: [
            'babel-polyfill', path.join(basePath, 'doc/entry.js'),
        ]
    }
};
