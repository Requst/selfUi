const path = require('path') //取绝对路径
const { VueLoaderPlugin } = require('vue-loader')

const glob = require('glob') //取全局文件
const list = {}
async function makeList(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`)
    console.log(files, 'files')
    for (let file of files) {
        const component = file.split(/[/.]/)[2]
        list[component] = `./${file}`
    }
    console.log(list, 'list')
}
makeList('components/lib', list)
module.exports = {
    entry: list,
    output: {
        filename: '[name].umd.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'mui',
        libraryTarget: 'umd'
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            { 
                test: /\.vue$/, 
                use: {
                    loader: 'vue-loader'
                }
            }
        ],
    },
    mode: 'development',
}