import { paths } from '../gulpfile.esm'
import { series, watch } from 'gulp' 
import browserSync from 'browser-sync'
import pugCompile from "./pug2html"
import processingStyles from "./styles"
import processingScripts from "./scripts"
import processingImages from "./image"
import svgSprites from "./svgsprite"
import fonts from "./fonts"

function server() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        port: 8081,
        open: true,
        cors: true
    })

    watch(paths.pug.watch, series(pugCompile)).on('change', browserSync.stream)
    watch(paths.styles.watch, series(processingStyles)).on("change", browserSync.stream)
    watch(paths.js.watch, series(processingScripts)).on("change", browserSync.reload)
    watch(paths.images.watch, series(processingImages)).on("change", browserSync.reload)
    watch(paths.sprites.watch, series(svgSprites)).on("change", browserSync.reload)
    watch(paths.fonts.watch, series(fonts)).on("change", browserSync.reload)
}

export default server