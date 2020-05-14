# Installation

## Command Line

Run the correspondent command in terminal

``` bash
$ npm i -S gosp.css
```

``` bash
$ yarn add gosp.css --save
```

``` bash
$ bower install gosp.css --save
```

## Build

Run one of these commands to build `src/gosp.scss` file.

#### Building gosp file

``` bash
$ sass gosp.scss gosp.css
```

#### Building sass styles with gulp

``` js
const gosp = require('gosp').includePath

gulp.task('scss', () => {
	gulp.src('')
})

```

``` scss
@import "src/gosp";
```

``` bash
$ sass style.scss style.css
```

## Downloading

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


### Import CSS directive

``` css
@import "path/gosp.min.css";
```
