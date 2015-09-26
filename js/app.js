angular.module('MobYourLife.Manual', [
	'ngRoute'
])

.config(function ($routeProvider) {
	$routeProvider
		.when('/apresentacao', {
			templateUrl: '/partials/apresentacao.html',
			controller: 'ApresentacaoCtrl'
		})
		.when('/vantagens', {
			templateUrl: '/partials/vantagens.html',
			controller: 'VantagensCtrl'
		})
		.when('/precos', {
			templateUrl: '/partials/precos.html',
			controller: 'PrecosCtrl'
		})
		.when('/manual', {
			templateUrl: '/partials/manual.html',
			controller: 'ManualCtrl'
		})
		.when('/fale-conosco', {
			templateUrl: '/partials/fale-conosco.html',
			controller: 'FaleConoscoCtrl'
		})
		.otherwise({
			redirectTo: '/apresentacao'
		});
})

.run(function ($rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (ev, data) {
		$rootScope.controller = data.controller;
	});
})

.controller('ApresentacaoCtrl', function () {
	//
})

.controller('VantagensCtrl', function () {
	//
})

.controller('PrecosCtrl', function () {
	//
})

.controller('ManualCtrl', function () {
	//
});
