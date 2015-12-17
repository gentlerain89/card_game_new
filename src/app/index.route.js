(function() {
  'use strict';

  angular
    .module('cardGameNew')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }).when('/card', {
        templateUrl: 'app/components/game/gameView.html',
        controller: 'GameController',
        controllerAs: 'game'
      }).otherwise({
        redirectTo: '/'
      });
  }

})();
