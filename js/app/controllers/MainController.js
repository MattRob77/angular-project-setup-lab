function MainController($scope) {
  $scope.name = 'Matthew!'
}


angular
  .module('app')
  .controller('MainController', MainController);
