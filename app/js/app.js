var main = angular.module('main', [], function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/statics/main.html'
    });
    $routeProvider.when('/students', {
        templateUrl: 'app/partials/students-list.html',
        controller: PeopleListCtrl
    });
    $routeProvider.when('/students/:id', {
        templateUrl: 'app/partials/student.html',
        controller: StudentCtrl
    });

    $routeProvider.otherwise({redirectTo: '/home'});
});
