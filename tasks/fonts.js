import { paths } from "../gulpfile.esm"
import { src, dest } from "gulp"
import plumber from "gulp-plumber"
import notify from "gulp-notify"

function fonts() {
    return src(paths.fonts.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: "Fonts",
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(dest(paths.fonts.dist))
}

export default fonts