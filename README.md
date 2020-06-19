# Frontent-Build

## Особенности

В сборке используются следующие элементы:

* Используется именование классов по [БЭМ] (https://ru.bem.info/)
  
* Используется препроцессор [SCSS](https://sass-scss.ru/guide/)
  
* Для написание разметки страницы используется шаблонизатор [PUG](https://pugjs.org/api/getting-started.html)
  
* Используется [Babel](https://babeljs.io/) преобразующий код JavaScript из ES6+ в более старые версии ES5 и ниже.

* Используется сборщик [Webpack](https://webpack.js.org/) для сборки Javascript модулей проекта.

## Установка
Для того чтобы начать пользоваться сборкой необходимо:

* Проверить установлены ли у вас [NodeJS](https://nodejs.org/en/), для этого необходимо в консоли ввести следующие команды:
``` node -v ```
``` npm -v ```

Менеджер пакетов NPM(Node Packeage Manager) входит в состав NodeJS. После установки NodeJS можно перейти к скачиванию сборки.

Для скачивания сборки необходимо: 
* Перейти в gitHub.
* Скачать сборку используя консоль или графический интерфейс gitHub.
* Установить утилиту командной строки [gulp](https://gulpjs.com/docs/en/getting-started/quick-start), используя следующую команду ```npm install gulp-cli --global```.
* Перейти в папку со скачанной сборкой командой ```cd Frontent-Build```.
* Установить все необходимые зависимости, находящиеся в файле packeage.json командой ```npm i```.
* Для запуска сборки после того как будут установлены все зависимости использовать команду ```npm run dev``` или командой ```gulp``` т.к. режим разработки уставнолен по умолчанию.
* Чтобы собрать проект для production необходимо использовать команду ```npm run build```.
  
:warning: После запуска сборки в консоли браузера может возникнуть ошибка: "The message port is closed until a response is received." из-за нее может не работать обновление страницы при изменении файлов проекта. Для устранения ошибки требуется отключить все используемые в браузере расширения. Например, такие как: adguard, freegate и т.д.**

## Файловая структура сборки
```
Frontent-Build
├── dist
├── tasks
├── src
│   ├── fonts
│   ├── img
│   ├── js
│   ├── pug
│   ├── scss
│   └── static
├── gulpfile.esm.js
├── .browserlistrc
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .eslintrc.json
└── .gitignore
```

* Корневой каталог:
  * ```tasks``` - в нем расположены js-файлы c задачами gulp
  * ```.babelrc.js``` - настройки транспайлера Babel
  * ```eslintrc.json``` - настройки для линтера eslint
  * ```.gitignore``` - список файлов и каталогов, которые должны быть проигнорированы git.
  * ```gulpfile.esm.js``` - настройки сборщика Gulp/
  * ```webpack.config.js``` - настройки сборщика Webpack
  * ```package.json``` - список зависимостей проекта.
* Директория ```src``` - используется для разработки
  * Локальные файлы шрифтов ```src/fonts```
  * JavaScript-файлы ```src/js```
  * Изображения ```src/img```
  * Pug-файлы страниц проекта ```src/pug/pages```, секции ```src/pug/sections```, миксины ```src/pug/mixins```, статические файлы, например ```sitemap.xml``` ```src/static```
* Директория ```dist``` в ней запускается локальный сервер для разработки.

## Страницы проекта
* Страницы проекта расположены в каталоге ```src/pug/pages```
* Главная страница ```src/pug/pages/index.pug```
  
## Сторонние CSS и JS библиотеки
* Все сторонние библиотеку устанавливаются в каталог ```node_modules``` с помощью команды ```npm i package_name```
* Для подключения JS-файлов библиотек необходимо импортировать их в JS-файлы веб-страниц, на которых они будут использоваться. Пример подключения JS-библиотек:
```javascript
    import jquery from 'jquery'
```
Импорт js-библиотеки должен быть расположен в начале JS-файла

:warning: Если у вас в проекте используется несколько JS-библиотек, которые будут подключены на нескольких страницах, то для того чтобы избежать возникновения ошибок необходимо:
* Создать в каталоге ```src/js/modules_pages``` JS-файл, который будет называться также как и веб-страница, на которой он будет использоваться.
* Затем в данный файл импортировать JS-библиотеку, которая будет использоваться только для данной страницы.
* Для других веб-страниц выполнить аналогичные действия.
* В файле ```webpack.config.js``` в точку входа добавить JS-файлы, страниц:
```javascript
    entry: {
        main: "./src/js/index.js",
        pageOne: "./src/js/modules_pages/pageOne.js",
        pageOne: "./src/js/modules_pages/two.js",
    }
```
* Подключить JS-файлы на html-страницах 
