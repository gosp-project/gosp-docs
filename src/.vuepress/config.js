const sidebar = {
	docs : [
		'',
		'get-started',
		'configuration',
		'variables',
		'maps',
		'mixins',
	]
}

const config = {
	dest: './docs',
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
				nav: [
					{text: 'Docs', link: '/docs/'},
					{text: 'Examples', link: '/examples'},
					{text: 'Github', link: 'https://github.com/gosp-project/gosp-sass'}
				],
				sidebar: {
					'/docs/': genSidebar('Documentation', sidebar.docs)
				}
			},
			'/es/': {
				label: 'Español',
				selectText: 'Idiomas',
				editLinkText: 'Editar',
				lastUpdated: 'Última actualización',
				nav: [
					{text: 'Documentación', link: '/es/docs/'},
					{text: 'Ejemplos', link: '/es/examples'},
					{text: 'Github', link: 'https://github.com/gosp-project/gosp-sass'}
				],
				sidebar: {
					'/es/docs/': genSidebar('Documentación', sidebar.docs)
				}
			}
		},
		
	},
	markdown: {
		lineNumbers: true
  	}

}

function genSidebar(title, children){
	return [{
		title,
		collapsable: false,
		children: children
	}]
}

module.exports = config