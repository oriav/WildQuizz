angular.module('app')
.controller('MainController', function($scope, quizzService){

  $scope.question = "";
  quizzService.get().then(function(res){
    console.log(res.data);
  });








});
