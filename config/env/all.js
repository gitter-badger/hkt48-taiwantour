'use strict';

module.exports = {
	app: {
		title: 'HKT48',
		description: 'HKT48 Taiwan tour',
		keywords: 'HKT48'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',
				'public/lib/slick-carousel/slick/slick.css',
				'public/lib/magnific-popup/dist/magnific-popup.css',
				'public/lib/angular-loading-bar/build/loading-bar.css'
			],
			js: [
				'public/lib/jquery/dist/jquery.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-cookies/angular-cookies.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-touch/angular-touch.js',
				'public/lib/angular-sanitize/angular-sanitize.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'public/lib/tabletop/src/tabletop.js',
				'public/lib/slick-carousel/slick/slick.js',
				'public/lib/angular-slick/dist/slick.js',
				'public/lib/angular-deckgrid/angular-deckgrid.js',
				'public/lib/magnific-popup/dist/jquery.magnific-popup.js',
				'public/lib/d3/d3.js',
				'public/lib/angular-loading-bar/build/loading-bar.js',
				'public/lib/angular-scroll/angular-scroll.js'
			]
		},
		css: [
			'public/modules/**/css/*.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};
