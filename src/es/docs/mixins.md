# Mixins

[[toc]]

## Class

Devuelve un grupo de clases iterando una propiedad con valor incrementable.

<b>Parámetros</b>
* `String` Prefix
* `String` Attribute (solo uno)
* `String` Unit type (si no hay una unidad de medida usa una cadena vacía: ' ')
* `Number` Start value
* `Number` End value
* `Number` Increment
* `Boolean` Important

<b>Parámetros requeridos</b>
* Prefix
* Attr
* Type

<b>Parámetros por defecto</b>
* Start value: `0`
* End value: `50`
* Gap: `5`
* Important: `false`

``` scss
@mixin class($prefix, $attr, $type, $start: 0, $end: 50, $gap: 5, $important: false)
```

Entrada

``` scss
@include class(pad, padding, px, 0, 50, 10);
```

Salida

``` css
.pad0{padding:0}
.pad10{padding:10px}
.pad20{padding:20px}
.pad30{padding:30px}
.pad40{padding:40px}
.pad50{padding:50px}
```

## Media

Devuelve `@content` contenido dentro de una `@media` query.

<b>Parámetros</b>
* `String` Size
* `Boolean` Min
* `Boolean` Max

<b>Parámetros requeridos</b>
* Size

<b>Default</b>
* Min: `true`
* Max: `true`

Usa un solo parámetro `media(md)` cuando la `@media` query tiene `min-width` y `max-width`.

``` scss
@mixin media($size, $min: true, $max: true)
```

Entrada

``` scss
@include media(md) {
	body {
		background: #4527a0;
	}
}
```

Salida

``` css
@media only screen and (min-width: 769px) and (max-width: 1280px) {
	body {
		background: #4527a0;
	}
}
```

### Mixin de media queries simplificado

Este mixin no necesita parámetros

<table>
	<thead>
		<tr>
			<th>Mixin</th>
			<th>Descripción</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>xs</td>
			<td>Extra small únicamente</td>
		</tr>
		<tr>
			<td>sm-down</td>
			<td>Small y extra small</td>
		</tr>
		<tr>
			<td>sm</td>
			<td>Small únicamente</td>
		</tr>
		<tr>
			<td>sm-up</td>
			<td>Desde small hasta extra large</td>
		</tr>
		<tr>
			<td>md-down</td>
			<td>Desde medium hasta extra small</td>
		</tr>
		<tr>
			<td>md</td>
			<td>Medium únicamente</td>
		</tr>
		<tr>
			<td>md-up</td>
			<td>Desde medium hasta extra large</td>
		</tr>
		<tr>
			<td>lg-down</td>
			<td>Desde large hasta extra small</td>
		</tr>
		<tr>
			<td>lg</td>
			<td>Large únicamente</td>
		</tr>
		<tr>
			<td>lg-up</td>
			<td>Desde large hasta extra large</td>
		</tr>
		<tr>
			<td>xl</td>
			<td>Extra large únicamente</td>
		</tr>
	</tbody>
</table>

Entrada

``` scss
@include md {
	body {
		background: #4527a0;
	}
}
```

Salida

``` css
@media only screen and (min-width: 769px) and (max-width: 1280px) {
	body {
		background: #4527a0;
	}
}
```

## Center box

Devuelve una clase para centrar elementos usando los lados de `margin`.

<b>Parámetros</b>
* `String` Size
* `String` Side

<b>Parámetros requeridos</b>
* Size

<b>Parámetros por defecto</b>
* Side: `null`

``` scss
@mixin center-box($size, $side: null)
```

Entrada 

``` scss
@include center-box(md, down);
```

Salida

``` css
.md-down-center-align {
	margin-left: auto;
	margin-right: auto;
}
```

## Grid

Devuelve la retícula para una `@media` query.

<b>Parámetros</b>
* `String` Size
* `String` Type
* `Int` Columns
* `Boolean` Fractionary

<b>Parámetros requeridos</b>
* Size

<b>Parámetros por defecto</b>
* Type: `flex`
* Columns: `12`
* Fractionary: `false`

<b>Nota:</b> Parámetros por defecto fueron definidos en el archivo `src/_config.scss`.

``` scss
@mixin grid($size, $type: 'flex', $columns: $gosp-grid-columns, $fractionary: $gosp-grid-fractionary)
```

Entrada

``` scss
@include xl {
	@include grid(xl, $gosp-grid-type);
}
```

Salida

``` css
@media only screen and (min-width: 100.0625em) {
  .container {
    width: 75%;
    max-width: 100em;
  }
  .col-xl {
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
  }
  .col {
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    -ms-flex-preferred-size: 0;
        flex-basis: 0;
    max-width: 100%;
  }
  .col-auto {
    width: auto;
  }
  .xl-start {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
  }
  .xl-center {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .xl-end {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
  }
  .xl-around {
    -ms-flex-pack: distribute;
        justify-content: space-around;
  }
  .xl-between {
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
  .xl-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  }
  .xl-middle {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .xl-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
  }
  .xl-1st, .xl-first {
    -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
            order: -1;
  }
  .xl-2nd {
    -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
            order: 2;
  }
  .xl-3rd {
    -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
            order: 3;
  }
  .xl-4th {
    -webkit-box-ordinal-group: 5;
        -ms-flex-order: 4;
            order: 4;
  }
  .xl-5th {
    -webkit-box-ordinal-group: 6;
        -ms-flex-order: 5;
            order: 5;
  }
  .xl-6th {
    -webkit-box-ordinal-group: 7;
        -ms-flex-order: 6;
            order: 6;
  }
  .xl-7th {
    -webkit-box-ordinal-group: 8;
        -ms-flex-order: 7;
            order: 7;
  }
  .xl-8th {
    -webkit-box-ordinal-group: 9;
        -ms-flex-order: 8;
            order: 8;
  }
  .xl-9th {
    -webkit-box-ordinal-group: 10;
        -ms-flex-order: 9;
            order: 9;
  }
  .xl-10th {
    -webkit-box-ordinal-group: 11;
        -ms-flex-order: 10;
            order: 10;
  }
  .xl-11th {
    -webkit-box-ordinal-group: 12;
        -ms-flex-order: 11;
            order: 11;
  }
  .xl-12th, .xl-last {
    -webkit-box-ordinal-group: 13;
        -ms-flex-order: 12;
            order: 12;
  }
  .col-xl-1 {
    -ms-flex-preferred-size: 8.33333%;
        flex-basis: 8.33333%;
    max-width: 8.33333%;
  }
  .col-xl-2 {
    -ms-flex-preferred-size: 16.66667%;
        flex-basis: 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-3 {
    -ms-flex-preferred-size: 25%;
        flex-basis: 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    -ms-flex-preferred-size: 33.33333%;
        flex-basis: 33.33333%;
    max-width: 33.33333%;
  }
  .col-xl-5 {
    -ms-flex-preferred-size: 41.66667%;
        flex-basis: 41.66667%;
    max-width: 41.66667%;
  }
  .col-xl-6 {
    -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    -ms-flex-preferred-size: 58.33333%;
        flex-basis: 58.33333%;
    max-width: 58.33333%;
  }
  .col-xl-8 {
    -ms-flex-preferred-size: 66.66667%;
        flex-basis: 66.66667%;
    max-width: 66.66667%;
  }
  .col-xl-9 {
    -ms-flex-preferred-size: 75%;
        flex-basis: 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    -ms-flex-preferred-size: 83.33333%;
        flex-basis: 83.33333%;
    max-width: 83.33333%;
  }
  .col-xl-11 {
    -ms-flex-preferred-size: 91.66667%;
        flex-basis: 91.66667%;
    max-width: 91.66667%;
  }
  .col-xl-12 {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    max-width: 100%;
  }
  .col-xl-offset-0 {
    margin-left: 0%;
  }
  .col-xl-offset-1 {
    margin-left: 8.33333%;
  }
  .col-xl-offset-2 {
    margin-left: 16.66667%;
  }
  .col-xl-offset-3 {
    margin-left: 25%;
  }
  .col-xl-offset-4 {
    margin-left: 33.33333%;
  }
  .col-xl-offset-5 {
    margin-left: 41.66667%;
  }
  .col-xl-offset-6 {
    margin-left: 50%;
  }
  .col-xl-offset-7 {
    margin-left: 58.33333%;
  }
  .col-xl-offset-8 {
    margin-left: 66.66667%;
  }
  .col-xl-offset-9 {
    margin-left: 75%;
  }
  .col-xl-offset-10 {
    margin-left: 83.33333%;
  }
  .col-xl-offset-11 {
    margin-left: 91.66667%;
  }
  .col-xl-offset-12 {
    margin-left: 100%;
  }
  .col-xl-push-0 {
    left: 0%;
  }
  .col-xl-pull-0 {
    right: 0%;
  }
  .col-xl-push-1 {
    left: 8.33333%;
  }
  .col-xl-pull-1 {
    right: 8.33333%;
  }
  .col-xl-push-2 {
    left: 16.66667%;
  }
  .col-xl-pull-2 {
    right: 16.66667%;
  }
  .col-xl-push-3 {
    left: 25%;
  }
  .col-xl-pull-3 {
    right: 25%;
  }
  .col-xl-push-4 {
    left: 33.33333%;
  }
  .col-xl-pull-4 {
    right: 33.33333%;
  }
  .col-xl-push-5 {
    left: 41.66667%;
  }
  .col-xl-pull-5 {
    right: 41.66667%;
  }
  .col-xl-push-6 {
    left: 50%;
  }
  .col-xl-pull-6 {
    right: 50%;
  }
  .col-xl-push-7 {
    left: 58.33333%;
  }
  .col-xl-pull-7 {
    right: 58.33333%;
  }
  .col-xl-push-8 {
    left: 66.66667%;
  }
  .col-xl-pull-8 {
    right: 66.66667%;
  }
  .col-xl-push-9 {
    left: 75%;
  }
  .col-xl-pull-9 {
    right: 75%;
  }
  .col-xl-push-10 {
    left: 83.33333%;
  }
  .col-xl-pull-10 {
    right: 83.33333%;
  }
  .col-xl-push-11 {
    left: 91.66667%;
  }
  .col-xl-pull-11 {
    right: 91.66667%;
  }
  .col-xl-push-12 {
    left: 100%;
  }
  .col-xl-pull-12 {
    right: 100%;
  }
  .xl-tac {
    text-align: center;
  }
  .xl-taj {
    text-align: justify;
  }
  .xl-tal {
    text-align: left;
  }
  .xl-tar {
    text-align: right;
  }
}
```

<b>Nota:</b> Estamos usando `$gosp-grid-type: flex` y `$gosp-grid-fractionary: false`.


## Responsive helpers

Devuelve un grupo de clases de ayuda para usar dentro de `@media` queries. Está usando los mixins [class](#class) y [classmap](#classmap) dentro para generar dichos helpers.

Esto es usando en el archivo `src/util/_responsive_classes.scss`.

<b>Parámetros</b>
* `String` Prefix

<b>Parámetros por defecto</b>
* Prefix: `null`


``` scss
@mixin responsive-helpers($prefix: null)
```

Entrada

``` scss
@include md {
	@include responsive-helpers(md);
}
```

Salida

``` css
@media only screen and (min-width: 48.0625em) and (max-width: 80em) {
  .md-m0 {
    margin: 0px;
  }
  .md-m5 {
    margin: 5px;
  }
  .md-m10 {
    margin: 10px;
  }
  .md-m15 {
    margin: 15px;
  }
  .md-m20 {
    margin: 20px;
  }
  .md-m25 {
    margin: 25px;
  }
  .md-m30 {
    margin: 30px;
  }
  .md-m35 {
    margin: 35px;
  }
  .md-m40 {
    margin: 40px;
  }
  .md-m45 {
    margin: 45px;
  }
  .md-m50 {
    margin: 50px;
  }
  /* And more */
```

## Classmap

Devuelve un grupo de clases con la misma `propiedad` pero diferentes valores usando mapas.

<b>Parámetros</b>
* `String` Property
* `Map` Map
* `String` Prefix

<b>Parámetros requeridos</b>
* Property
* Map

<b>Parámetros por defecto</b>
* Prefix: `null`

``` scss
@mixin classmap($prop, $map, $prefix: null)
``` 

Entrada

``` scss
@include classmap(float, $gosp-float, xs);
```

Salida

``` css
.xs-fl {
  float: left;
}
.xs-fn {
  float: none;
}
.xs-fr {
  float: right;
}
.xs-fu {
  float: unset;
}
```

## List columns

Devuelve una clase dinámica con la propiedad `columns` para usar con los hijos de los elementos `ul` y `ol`.

<b>Parámetros</b>
* `Int` Columns
* `String` Prefix

<b>Parámetros requeridos</b>
* Columns

<b>Parámetros por defecto</b>
* Prefix: `null`

``` scss
@mixin list-columns($columns, $prefix: null)
```

Entrada

``` scss
@for $x from 1 through ($gosp-grid-columns / 2) {
   @include list-columns($x, md);
}
```

Salida

``` css
.md-list-columns-1 {
	columns: 1;
}
.md-list-columns-2 {
	columns: 2;
}
.md-list-columns-3 {
	columns: 3;
}
.md-list-columns-4 {
	columns: 4;
}
.md-list-columns-5 {
	columns: 5;
}
.md-list-columns-6 {
	columns: 6;
}
```

## List helper

Devuelve un grupo de clases para usar con los hijos de los elementos `ul` y `ol`.

<b>Parámetros</b>
* `String`  Prefix

<b>Parámetros por defecto</b>
* Prefix: `null`

``` scss
@mixin list-helper($prefix: null)
```

Entrada

``` scss
@include list-helper(md);
```

Salida

``` css
.md-list-inline li {
	display: inline-block;
}
.md-list-block li {
	display: block;
}
```