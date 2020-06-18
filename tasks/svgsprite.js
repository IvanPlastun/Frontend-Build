import { paths } from "../gulpfile.esm"
import { src, dest } from "gulp"
import svgSprite from "gulp-svg-sprite"
import plumber from "gulp-plumber"
import notify from "gulp-notify"
import browserSync from "browser-sync"

function svgSprites() {
    return src(paths.sprites.src)
        .pipe(plumber({
            errorHandler: notify.onError(err => {
                return {
                    title: "Sprites",
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(svgSprite({
            shape: {
                dest: 'base-svg'
            },
            mode: {
                stack: {
                    sprite: '../sprite.svg'
                }
            }
        }))
        .pipe(dest(paths.sprites.dist))
        .on('end', browserSync.reload)
}

export default svgSprites