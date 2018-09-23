# Configuration

In this file `src/util/_config.scss` you can set some configuration parameters:

## Variables

### Responsive media queries

`$gosp-responsive` determine if grid media queries will be built or not.

``` scss
$gosp-responsive: true;
```

Default: `true`

### Grid Type

`$gosp-grid-type` sets the grid type to build.

``` scss
$gosp-grid-type: 'flex';
```
Options: `flex`, `float` or `inline`.

Default: `flex`

### Grid columns

Sets the grid columns

``` scss
$gosp-grid-columns: 12;
```

Default: `12`

<b>Note:</b> If you change the `$gosp-grid-columns` the built file size will increase or decrease.

### Fractioary grid

`$gosp-grid-fractionary` when is `true` the grid built will be naming with fraction prefix, like .col-md-1-2 to get a 50% column width.

``` scss
$gosp-grid-fractionary: false;
```

Default: `false`

<b>Note</b> Fractionary grid is not optimized and generate more classes than non fractionary.

### Column gutter

`$gosp-grid-column-gutter` determines the column's padding.

``` scss
$gosp-grid-columnm-gutter: 0px;
```

Default: `0px`

### Breakpoints

|Prefix|Min|Max|
| :- | -: | -: |
| xs |  | 480px |
| sm |481px|768px|
| md |769px|1280px|
| lg |1281px|1600px|
| xl |1601px| |

``` scss
$gosp-breakpoints: (
	xs: (
		prefix: 'col-xs',
		max: em(480px)
	),
	sm: (
		prefix: 'col-sm',
		min: em(481px), 
		max: em(768px)
	),
	md: (
		prefix: 'col-md',
		min: em(769px), 
		max: em(1280px)
	),
	lg: (
		prefix: 'col-lg',
		min: em(1281px), 
		max: em(1600px)
	),
	xl: (
		prefix: 'col-xl',
		min: em(1601px)
	)
);
```

<b>Note:</b> Prefixes are not used yet.

## Lists

### Media queries

This list is used to generate media queries utilities

``` scss
$gosp-media-queries: xs, sm, sm-up, sm-down, md, md-up, md-down, lg, lg-up, lg-down, xl;
```

## Bootstrap

These variables are used to set text properties

``` scss
$gosp-font-family-sans-serif:  "Helvetica Neue", Helvetica, Arial, sans-serif;
$gosp-font-family-serif:       Georgia, "Times New Roman", Times, serif;
$gosp-font-family-monospace:   Menlo, Monaco, Consolas, "Courier New", monospace;
$gosp-font-family-base:        $gosp-font-family-sans-serif;

$gosp-font-size-base:          16px;
$gosp-font-size-large:         ceil(($gosp-font-size-base * 1.25)); // ~18px
$gosp-font-size-small:         ceil(($gosp-font-size-base * 0.85)); // ~12px

$gosp-font-size-h1:            floor(($gosp-font-size-base * 2.6)); // ~36px
$gosp-font-size-h2:            floor(($gosp-font-size-base * 2.15)); // ~30px
$gosp-font-size-h3:            ceil(($gosp-font-size-base * 1.7)); // ~24px
$gosp-font-size-h4:            ceil(($gosp-font-size-base * 1.25)); // ~18px
$gosp-font-size-h5:            $gosp-font-size-base;
$gosp-font-size-h6:            ceil(($gosp-font-size-base * 0.85)); // ~12px

$gosp-line-height-base:        1.428571429; // 20/14
$gosp-line-height-computed:    floor(($gosp-font-size-base * $gosp-line-height-base)); // ~20px

$gosp-headings-font-family:    inherit;
$gosp-headings-font-weight:    500;
$gosp-headings-line-height:    1.1;
$gosp-headings-color:          inherit;

```

