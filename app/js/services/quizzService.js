angular.module('app')
    .service('quizzService', function($http) {
        return {
            get: function() {
                return $http.get('https://opentdb.com/api.php?amount=1');
            },
        };
    });
