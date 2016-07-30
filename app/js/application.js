/**================================================
JS : Aplication SCRIPTS
===================================================*/

 var application = angular.module('application', []);

application
  .controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
});
