angular.module('app')
    .controller('MainController', function($scope, QuizzService) {

        $scope.question = "";
        $scope.nextQuestion = function() {
            QuizzService.get().then(function(res) {
                console.log(res.data);
                $scope.question = (res.data.results[0].question);
            });
        };

        $scope.nextQuestion();
    });
