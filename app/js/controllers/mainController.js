angular.module('app')
    .controller('MainController', function($scope, QuizzService) {

        $scope.question = "";
        $scope.nextQuestion = function() {
            QuizzService.get().then(function(res) {
                console.log(res.data);
                $scope.question = (res.data.results[0].question);
                console.log(res.data);
                $scope.answers = res.data.results[0].incorrect_answers;
                let index = Math.round(Math.random() * (res.data.results[0].incorrect_answers.length - 1));
                $scope.answers.splice(index, 0, res.data.results[0].correct_answer);
                console.log($scope.answers);

            });
        };

        $scope.nextQuestion();
    });

var index = []; // declare it outside document.ready
$(document).ready(function() {
    $('.sal').click(function(i) {
        values.push($(this).val()); // add value to array
        console.log(index)
    });
});
