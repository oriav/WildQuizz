angular.module('app')
    .controller('MainController', function($scope, QuizzService) {

        $scope.question = "";
        $scope.nextQuestion = function() {
            QuizzService.get().then(function(res) {
                $scope.question = (res.data.results[0].question);
                $scope.answers = res.data.results[0].incorrect_answers;
                let index = Math.round(Math.random() * (res.data.results[0].incorrect_answers.length - 1));
                $scope.answers.splice(index, 0, res.data.results[0].correct_answer);

            });
        };

        $scope.nextQuestion();
    });





//une partie = un nombre de questions = total de points
//profil score = addition du nombre de points de toutes les parties
//Bonus :
//stat : meilleur catégorie, points par catégories/difficultés
//Leaderboard : classement profil score by order
