import { paths } from "../gulpfile.esm"
import { src, dest } from "gulp-favicons"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import favicon from "gulp-favicons"

function favicons() {
    return src(paths.favicons.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: "Favicons",
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(favicon({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(dest(paths.favicons.dist))
}

export default favicons
