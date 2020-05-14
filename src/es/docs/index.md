# Instalación

## Línea de comandos

Ejecuta el comando correspondiente en la terminal

``` bash
$ npm i -S gosp.css
```

``` bash
$ yarn add gosp.css --save
```

``` bash
$ bower install gosp.css --save
```


## Compilación

Ejecuta alguno de los siguientes comandos para compilar el archivo `src/gosp.scss`.

#### Compilación de gosp

``` bash
$ sass gosp.scss gosp.css
```

#### Compilación con Gulp

##### gulpfile.js

``` js
const gosp = require('gosp')

gulp.task('scss', () => {
	gulp.src('./dev/scss/styles.scss')
		.pipe(sass({
			outputStyle: 'compressed',
			includePaths: [gosp.includePath]
		}).on('error', sass.logError))
		.pipe(autoprefixer(vendors))
		.pipe(gulp.dest('./assets/css/')
})

```

##### styles.scss
``` scss
@import "src/gosp";
```

##### Ejecución de tarea de Gulp
``` bash
$ gulp scss
```

## Descarga

### CDN

||URL|
|:-|:-|
|RawGit|https://cdn.jsdelivr.net/gh/gosp-project/gosp-sass/dist/gosp.min.css|
|Yarn|https://unpkg.net/npm/gosp.css@1.0.20/dist/gosp.min.css|
|JSDelivr|https://cdn.jsdelivr.net/npm/gosp.css@1.0.20/dist/gosp.min.css|

### Link tag

``` html
<link rel="stylesheet" href="/css/gosp.min.css">
```


### Directiva import CSS

``` css
@import "path/gosp.min.css";
```