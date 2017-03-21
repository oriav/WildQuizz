angular.module('app')
    .service('QuizzService', function($http) {
        return {
            get: function() {
                return $http.get('https://opentdb.com/api.php?amount=1');
            },
        };
    });
