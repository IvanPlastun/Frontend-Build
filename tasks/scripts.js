import { paths } from "../gulpfile.esm"
import webpack from "webpack"
import webpackStream from "webpack-stream"
import { src, dest } from "gulp"
import gulpif from "gulp-if"
import rename from "gulp-rename"
import browserSync from "browser-sync"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import yargs from "yargs"

const webpackConfig = require('../webpack.config.js')
const argv = yargs.argv,
    production = !!argv.production

webpackConfig.mode = production ? 'production' : 'development'
webpackConfig.devtool = production ? false : 'source-map'

function processingScripts() {
    return src(paths.js.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: 'Scripts',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulpif(production, rename({
            suffix: '.min'
        })))
        .pipe(dest(paths.js.dist))
        .on('end', browserSync.reload)
}

export default processingScripts