import { series, parallel } from "gulp"
// import requireDir from "require-dir"

// Tasks
import clean from "./tasks/clean"
import processingPug from "./tasks/pug2html"
import processingStyles from "./tasks/styles"
import processingScripts from "./tasks/scripts"
import processingImages from "./tasks/image"
import sprites from "./tasks/svgsprite"
import fonts from "./tasks/fonts"
// import favicons from "./tasks/favicons"
import server from "./tasks/server"


const paths = {
    pug: {
        src: "./src/pug/pages/**/*.pug",
        watch: "./src/pug/**/*.pug",
        dist: "./dist"
    },
    styles: {
        src: "./src/scss/main.scss",
        watch: "./src/scss/**/*.scss",
        dist: "./dist/css"
    },
    js: {
        entry: "./src/js/index.js",
        src: "./src/js/**/*.js",
        watch: "./src/js/**/*.js",
        dist: "./dist/js"
    },
    fonts: {
        src: "./src/fonts/**/*{woff,woff2}",
        dist: "./dist/fonts",
        watch: "./src/fonts/**/*.{woff,woff2}"
    },
    images: {
        src: "./src/img/**/.{jpg,jpeg,png,gif,tiff}",
        watch: "./src/img/**/*.{jpg,jpeg,png,gif,tiff}",
        dist: "./dist/img"
    },
    sprites: {
        src: "./src/img/svg/**/*.svg",
        watch: "./src/img/**/*.svg",
        dist: "./dist/img/sprites"
    },
    favicons: {
        src: "./src/img/favicons/*.{jpg,jpeg,png,gif}",
        dist: "./dist/img/favicons"
    }
}

// requireDir("./tasks/")

export { paths }

const development = series(clean,
    // parallel([sprites, fonts]),
    parallel([processingPug, processingScripts, processingStyles, processingImages, sprites, fonts]),
    // parallel([processingPug, processingStyles, processingScripts, sprites, fonts, processingImages]),
    parallel(server)
)

const buildProduction = series(clean,
    series([processingPug, processingScripts, processingStyles, processingImages, sprites, fonts])
)

export default development
