import {src, dest} from "gulp"
import browserSync from "browser-sync"
import notify from "gulp-notify"
import plumber from "gulp-plumber"
import pug from "gulp-pug"
import pugLinter from "gulp-pug-linter"
import htmlValidator from "gulp-w3c-html-validator"
import htmlClean from "gulp-htmlclean"
import yargs from "yargs"
import gulpif from "gulp-if"
import { paths } from "../gulpfile.esm"

const production = yargs.argv.production

function pugCompile() {
    return src(paths.pug.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: "Pug",
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(pugLinter({reporter: "default"}))
        .pipe(pug())
        .pipe(gulpif(production, htmlClean()))
        .pipe(htmlValidator())
        .pipe(dest(paths.pug.dist))
        .pipe(browserSync.stream())
}

export default pugCompile