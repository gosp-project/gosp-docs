# Guía de inicio

## Tabla de contenidos

* [Anchor](#anchor)
* [Background](#background)
* [Border](#border)
* [Box sizing](#box-sizing)
* [Color](#color)
* [Cursor](#cursor)
* [Display](#display)
* [Flex](#flex)
* [Flex](#grid-flex)
* [Float](#float)
* [Float](#grid-float)
* [Font](#font)
* [Grid](#grid)
* [Height](#height)
* [Inline block](#grid-fractions)
* [List](#list)
* [Margin & Padding](#margin-and-padding)
* [Opacity & Visibility](#opacity-and-visibility)
* [Position](#position)
* [Text](#text)
* [Visible & Hidden](#visible-and-hidden)

## Anchor
*  Elimina el subrayado y el contorno de un enlace
*  Agrega una transición en el hover

## Background
* Background color
* Background-size
* Background-position
* Background-attachment
* Background-image

### Background colors

| Clase | Propiedad | Valor |
| :-: | :-: | :-: |
|bc0|background-color|#000|
|bc3|background-color|#333|
|bc6|background-color|#666|
|bc9|background-color|#999|
|bcA|background-color|#AAA|
|bcC|background-color|#CCC|
|bcE|background-color|#EEE|
|bcF|background-color|#FFF|

### Background size
| Clase | Propiedad | Valor  |
| :-: | :-: | :-: |
|bscc|background-size|contain|
|bscv|background-size|cover|
|bsx|background-size|100% 100%|

### Background position
| Clase | Propiedad | Valor  |
| :-: | :-: | :-: |
|bpbc|background-position|center bottom|
|bpbl|background-position|left bottom|
|bpbr|background-position|right bottom|
|bpcb|background-position|center bottom|
|bpcc|background-position|center center|
|bpcl|background-position|left center|
|bpcr|background-position|right center|
|bpct|background-position|center top|
|bplb|background-position|left bottom|
|bplc|background-position|left center|
|bplt|background-position|left top|
|bprb|background-position|right bottom|
|bprc|background-position|right center|
|bprt|background-position|right top|
|bptc|background-position|center top|
|bptl|background-position|left top|
|bptr|background-position|right top,|

### Background attachment
| Clase | Propiedad | Valor  |
| :-: | :-: | :-: |
|baf|background-attachment|fixed|

### Background image
| Clase | Propiedad | Valor  |
| :-: | :-: | :-: |
|biu|background-image|unset|

### Background repeat
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|brnr|background-repeat|no-repeat|
|brr|background-repeat|repeat|
|brrx|background-repeat|repeat-x|
|brry|background-repeat|repeat-y|

## Box
* Border none
* Box sizing box
* Box content box

## Cursor
| Clase | Propiedad | Valor  |
|:-:|:-:|:-:|
|curd|cursor|default|
|curna|cursor|not-allowed|
|curp|cursor|pointer|
|curt|cursor|text|
|curw|cursor|wait|

## Display
| Clase | Propiedad | Valor  |
|:-:|:-:|:-:|
|db|display|block|
|dfx|display|flex|
|di|display|inline|
|dib|display|inline-block|
|din|display|initial|
|dn|display|none|
|dt|display|table|
|dtc|display|table-cell|
|dtr|display|table-row|

## Flex
* Align 
* Grow
* Justify
* Order
* Shrink
* Direction 

### Flex align
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|aic|align-items|center|
|aife|align-items|flex-end|
|aifs|align-items|flex-start|
|aiu|align-items|unset|
|asc|align-self|center|
|asfe|align-self|flex-end|
|asfs|align-self|flex-start|
|asu|align-self|unset|

### Flex direction
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fdc|flex-direction|column|
|fdr|flex-direction|row|
|fdcr|flex-direction|column-reverse|
|fdrr|flex-direction|row-reverse|

### Flex grow
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fg0|flex-grow|0|
|fg1|flex-grow|1|
|fg2|flex-grow|2|
|fg3|flex-grow|3|
|fg4|flex-grow|4|
|fg5|flex-grow|5|
|fg6|flex-grow|6|

Nota: Desde 0 hasta $gosp-grid-columns / 2

### Flex justify
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|jcc|justify-content|center|
|jcs|justify-content|stretch|
|jcu|justify-content|unset|
|jcfe|justify-content|flex-end|
|jcfs|justify-content|flex-start|
|jcsa|justify-content|space-around|
|jcsb|justify-content|space-between|
|jsc|justify-self|center|
|jss|justify-self|stretch|
|jsu|justify-self|unset|
|jsfe|justify-self|flex-end|
|jsfs|justify-self|flex-start|
|jssa|justify-self|space-around|
|jssb|justify-self|space-between|

### Flex order
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|ord-1|order|-1|
|ord0|order|0|
|ord1|order|1|
|ord2|order|2|
|ord3|order|3|
|ord4|order|4|
|ord5|order|5|
|ord6|order|6|
|ord7|order|7|
|ord8|order|8|
|ord9|order|9|
|ord10|order|10|
|ord11|order|11|
|ord12|order|12|

### Flex shrink
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fsh0|flex-shrink|0|
|fsh1|flex-shrink|1|
|fsh2|flex-shrink|2|
|fsh3|flex-shrink|3|
|fsh4|flex-shrink|4|
|fsh5|flex-shrink|5|
|fsh6|flex-shrink|6|

Nota: Desde 0 hasta $gosp-grid-columns / 2

### Flex wrap
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fwnw|flex-wrap|no-wrap|
|fww|flex-wrap|wrap|
|fwwr|flex-wrap|wrap-reverse|

## Floats
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fl|float|left|
|fn|float|none|
|fr|float|right|
|fu|float|unset|

## Font

|Prefix class|Propiedad|Unit|Desde|Hasta|Incremento|
|:-:|:-:|:-:|:-:|:-:|:-:|
|fsp|font-size|px|8|48|2|
|fsp|font-size|px|50|100|10|
|fse|font-size|em|0.5|3|0.25|
|fsr|font-size|rem|0.5|3|0.25|

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fw100|font-weight|100|
|fw200|font-weight|200|
|fw300|font-weight|300|
|fw400|font-weight|400|
|fw500|font-weight|500|
|fw600|font-weight|600|
|fw700|font-weight|700|
|fw800|font-weight|800|
|fw900|font-weight|900|
|b|font-weight|bold|
|l|font-weight|lighter|
|n|font-weight|normal|
|i|font-style|italic|
|o|font-style|oblique|

## Form
* Select personalizado con icono angular hacia abajo
* Contorno 0 en cada control del formulario

## Generales
|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|fw|width|100%|
|w100vw|width|100vw|

## Grid

Para usar retícula necesitas agregar `.col-{suffix}` dentro de un `.row`

Estos son los sistemas de retículas disponibles

|Tipo|Descripción|Anidar|Offset|Pull|Push|
|:-:|:-|:-:|:-:|:-:|:-:|
|Flex| Basado on flexboxgrid)| Sí | Sí | Sí | Sí
|Float| Basado on twbs bootstrap)| Sí | Sí | Sí | Sí
|Inline| Idéntico a bootstrap pero usando inline-block)| Sí | Sí | Sí | Sí
|Fraccionario| Usando fracciones como col-md-1-2 (col-md-6) basado en wp grid de Ricardo Aguirre)| Sí | Sí | Sí | Sí

Nota: Puedes ordenar las columnas flex usando las classes de order y sus respectivas clases responsivas.

## Height

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|h0|height|0|
|h25p|height|25%|
|h50p|height|50%|
|h75p|height|75%|
|h100p|height|100%|

|Prefix class|Propiedad|Unit|Desde|Hasta|Incremento|
|:-:|:-:|:-:|:-:|:-:|:-:|
|h|height|px|0|45|5|
|h|height|px|50|90|10|
|h|height|px|100|500|50|

## List

|Clase|Description|
|:-:|:-:|
|list-reset| Establece el margin y padding en 0 y list-style en none |
|list-inline| Muestra los elementos de una lista como inline-block |
|list-block| Muestra los elementos de una lista como bloque |

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|list-columns-1|columns|1|
|list-columns-2|columns|2|
|list-columns-3|columns|3|
|list-columns-4|columns|4|
|list-columns-5|columns|5|
|list-columns-6|columns|6|

Nota: Desde 1 hasta $gosp-grid-columns / 2

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|lsd|list-style|decimal|
|lsdlz|list-style|decimal-leading-zero|
|lsla|list-style|lower-alpha|
|lslr|list-style|lower-roman|
|lsua|list-style|upper-alpha|
|lsur|list-style|upper-roman|

## Margin and padding
|Prefix class|Propiedad|Unit|Desde|Hasta|Incremento|
|:-:|:-:|:-:|:-:|:-:|:-:|
|m|margin|px|0|50|5|
|mt|margin-top|px|0|50|5|
|mr|margin-right|px|0|50|5|
|mb|margin-bottom|px|0|50|5|
|ml|margin-left|px|0|50|5|
|p|padding|px|0|50|5|
|pt|padding-top|px|0|50|5|
|pr|padding-right|px|0|50|5|
|pb|padding-bottom|px|0|50|5|
|pl|padding-left|px|0|50|5|

## Position

|Prefix class|Propiedad|Unit|Desde|Hasta|Incremento|
|:-:|:-:|:-:|:-:|:-:|:-:|
|t|top|px|0|50|5|
|r|right|px|0|50|5|
|b|bottom|px|0|50|5|
|l|left|px|0|50|5|

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|pa|position|absolute|
|pf|position|fixed|
|pr|position|relative|
|ps|position|static|
|psy|position|sticky|
|pu|position|unset|

|Clase|Description|
|:-:|:-:|
|abs|Creates a layer with the same width and height over the parent element|

## Show and hide
|Clase|
|:-:|
|hide|
|hide-[media-query]|
|hide-[media-query]|
|hide-[media-query]|
|hide-[media-query]-below|
|hide-[media-query]-above|
|hide-[media-query]|
|show|
|show-[media-query]|
|show-[media-query]|
|show-[media-query]|
|show-[media-query]-below|
|show-[media-query]-above|
|show-[media-query]|

## Table
|Clase| Description|
|:-:|:-|
|Collapsed| Border collapsed|
|Fixed| Columns with the same width|
|Responsive| Table rows to columns under sm size|
|Striped| Even rows with light gray background|

## Text

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|tac|text-align|center|
|taj|text-align|justify|
|tal|text-align|left|
|tar|text-align|right|
|tdlt|text-decoration|line-through|
|tdo|text-decoration|overline|
|tdou|text-decoration|underline overline|
|tdu|text-decoration|underline|
|tduo|text-decoration|underline overline|
|tduos|text-decoration|underline overline line-through|
|tduso|text-decoration|underline overline line-through|
|tdous|text-decoration|underline overline line-through|
|tdosu|text-decoration|underline overline line-through|
|tdsou|text-decoration|underline overline line-through|
|tdsuo|text-decoration|underline overline line-through|
|ttc|text-transform|capitalize|
|ttl|text-transform|lowercase|
|ttn|text-transform|none|
|ttu|text-transform|uppercase|
|tdsda|text-decoration-style|dashed|
|tdsdo|text-decoration-style|dotted|
|tdss|text-decoration-style|solid|
|tdsw|text-decoration-style|wavy|
|tdi|text-direction|initial|
|tdl|text-direction|ltr|
|tdr|text-direction|rtl|

|Clase|Description|
|:-:|:-|
|paragraph-reset| Establece el margin en 0|

## Vertial align

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
|vab|vertical-align|bottom|
|vabl|vertical-align|baseline|
|vainh|vertical-align|inherit|
|vam|vertical-align|middle|
|vasub|vertical-align|sub|
|vasup|vertical-align|super|
|vat|vertical-align|top|
|vatb|vertical-align|text-bottom|
|vatt|vertical-align|text-top|

## Visibility

|Clase|Propiedad|Valor |
|:-:|:-:|:-:|
vc|visibility|collapse|
vh|visibility|hidden|
vu|visibility|unset|
vv|visibility|visible|

## Z Index
|   Index   |   Elements   |
| :-: | :-:|
| -1 | Any |
| 1 | Any |
| 10 | Fixed |
| 100 | Dialog |
| 1000 | Fullscreen layers |

## Breakpoints
|   Size   |   Min   |   Max  | Prefix |
| :-: | :-:| :-: | :-: | 
| xs |  | 480px| .col-xs | 
| sm | 481px | 768px | .col-sm |
| md | 769px | 1280px | .col-md |
| lg | 1281px|  1600px | .col-lg |
| xl | 1601px | col-xl | .col-xl |

## Media queries
| Size | Mixin |
| :-: | :-:
| xs | xs() |
| sm | sm() |
| sm-down | sm-down() |
| sm-up | sm-up() |
| md | md() |
| md-down | md-down() |
| md-up | md-up() |
| lg | lg() |
| lg-down | lg-down() |
| lg-up | lg-up() |
| xl | xl() |

Example:

<pre>
@include sm-up {
    // rules
}
</pre>

## Media helpers

This classes will be able to change property-value classes in each display resolution. Remember mobile first.

#### {size}-{key}{val}

* Margin
* Padding
* Font size (px, em, rem)
* Position
* Text align
* List columns
* Hide and show

| Propiedad | Valor | Helper class  |   Responsive helper   |
| :-: | :-:| :-:| :-:|
| Margin | Desde 0 to 50 | m50 | md-m50 |
| Margin top| Desde 0 to 50 | mt50 | md-mt50 |
| Margin right| Desde 0 to 50 | mr50 | md-mr50 |
| Margin left| Desde 0 to 50 | ml50 | md-ml50 |
| Margin bottom| Desde 0 to 50 | mb50 | md-mb50 |
| Padding | Desde 0 to 50 | p50 | md-p50 |
| Padding top| Desde 0 to 50 | pt50 | md-pt50 |
| Padding right| Desde 0 to 50 | pr50 | md-pr50 |
| Padding left| Desde 0 to 50 | pl50 | md-pl50 |
| Padding bottom| Desde 0 to 50 | pb50 | md-pb50 |
| Font size | Desde 8 to 48 | fsp16 | md-fsp16 |
| Font size | Desde 50 to 100 | fsp60 | xs-fsp20 |

|Clase| Responsive class| Description|
|:-:|:-:|:-|
|list-inline| [media-query]-list-inline|Displays list items as inline-block |
|list-block| [media-query]-list-block|Displays list items as block |

