console.log("controller loaded");

var budgetCalc = angular.module('budgetCalc');

budgetCalc.controller('linkTest', ['$scope', function($scope){

  $scope.test = "i havent eaten a banana in 6 months";

}]);
