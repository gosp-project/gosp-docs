<style lang="scss">

	@import "../style";
	
	body {
		height: 100vh;
	}

	#app {
		height: inherit;
	}

	.theme-container, .custom-layout, .main {
		height: inherit;
	}

	.btn {
		color: #FFF;
		padding: 11px 20px;
		border: none;
		font-size: 16px;
		text-transform: uppercase;
		display: block;
		&.flat {
			background: #333;
			padding: 1px;
			border: none;
			box-sizing: padding-box;
			> div {
				background: #FFF;
				color: #333;
				padding: 10px 20px;
			}
		}
		&.get {
			background: #4527a0;
		}
	}

	.tags{
		li {
			padding: 2px 5px;
			background: #ccc;
			border-radius: 3px;
			font-size: 8px;
			&:not(:last-child){
				margin-right: 5px;
			}
		}
	}

	h2 {
		border-bottom: none;
	}

	
</style>
<template lang="pug">
	section.main.hin
		.container.hin
			.row.hin.aic.jcc
				.col
					.row.aic.jcc
						.col-xs-12.tac
							h1.fw300.fsp40.mt0(title="Oriented Objects CSS") 
								div #[span.oocss GOSP].CSS
								//- .fsp12 Oriented Object CSS
							h2.fw300.fsp20
								div La librería no intrusiva y ligera para sass
								div que te permite hacer frontend más rápido y fácil
						.col-auto
							.p5
								a.btn.flat(href="/docs/")
									div Documentación

						.col-auto
							.p5
								a.btn.get(href="https://github.com/gosp-project/gosp-sass/archive/master.zip")
									div Descargar
						.col-xs-12.tac
							ul.list-reset.list-inline.tags
								li flex
								li grid
								li margin
								li padding
								li text
								li show
								li hide
								li +
</template>