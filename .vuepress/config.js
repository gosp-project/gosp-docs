module.exports = {
	locales: {
		'/': {
			title: 'GOSP',
			description: 'The non intrusive lightweight library for sass lets you make frontend faster and easier.',
		},
		'/es/': {
			title: 'GOSP',
			description: 'La librería no intrusiva y ligera para sass que te permite hacer frontend más rápido y fácil.',
		}
	},
	themeConfig: {
		search: false,
		locales: {
			'/': {
				label: 'English',
				selectText: 'Languages',
				editLinkText: 'Edit',
				lastUpdated: 'Last updated',
				nav: [
					{
						text: 'Guide',
						link: '/guide/'
					}
				],
				sidebar: {
					'/guide/': genSidebar('Guide')
				},
				nav: [
					{text: 'Docs', link: '/docs/'},
					{text: 'Examples', link: '/examples/'},
					{text: 'Github', link: 'https://github.com/gosp-project/gosp-sass'}
				],
				sidebar: {
					'/docs/': genSidebar('Documentation')
				}
			},
			'/es/': {
				label: 'Español',
				selectText: 'Idiomas',
				editLinkText: 'Editar',
				lastUpdated: 'Última actualización',
				nav: [
					{text: 'Documentación', link: '/es/docs/'},
					{text: 'Ejemplos', link: '/es/ejemplos/'},
					{text: 'Github', link: 'https://github.com/gosp-project/gosp-sass'}
				],
				sidebar: {
					'/es/docs/': genSidebar('Docs')
				}
			}
		},
		
	},
	markdown: {
		lineNumbers: true
  	}

}
function genSidebar(title){
	return [{
		title,
		collapsable: false,
		children: [
			'',
			'get-started',
			'configuration',
			'variables',
			'mixins',
			'maps',
		]
	}]
}
