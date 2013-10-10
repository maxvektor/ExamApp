var main = angular.module('main', [], function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/statics/main.html'
    });
    $routeProvider.when('/lectors', {
        templateUrl: 'app/partials/students-list.html',
        controller: LectorListCtrl
    });
    $routeProvider.when('/students', {
        templateUrl: 'app/partials/students-list.html',
        controller: StudentsListCtrl
    });
    $routeProvider.when('/students/add', {
        templateUrl: 'app/partials/student-add-edit.html',
        controller: StudentAddCtrl
    });
    $routeProvider.when('/students/:id/edit', {
        templateUrl: 'app/partials/student-add-edit.html',
        controller: StudentEditCtrl
    });
    $routeProvider.when('/students/:id', {
        templateUrl: 'app/partials/student.html',
        controller: StudentCtrl
    });


    $routeProvider.otherwise({redirectTo: '/home'});
});
