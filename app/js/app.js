var main = angular.module('main', [], function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/statics/main.html'
    });
    $routeProvider.when('/lectors', {
        templateUrl: 'app/partials/people-list.html',
        controller: LectorListCtrl
    });
    $routeProvider.when('/lectors/add', {
        templateUrl: 'app/partials/lectors-add-edit.html',
        controller: LectorAddCtrl
    });

    $routeProvider.when('/lectors/:id/edit', {
        templateUrl: 'app/partials/lectors-add-edit.html',
        controller: LectorEditCtrl
    });

    $routeProvider.when('/lectors/:id', {
        templateUrl: 'app/partials/lector.html',
        controller: LectorCtrl
    });

    $routeProvider.when('/students', {
        templateUrl: 'app/partials/people-list.html',
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

    $routeProvider.when('/lectures', {
        templateUrl: 'app/partials/lectures-list.html',
        controller: LecturesListCtrl
    });

    $routeProvider.when('/lectures/:id', {
        templateUrl: 'app/partials/lecture.html',
        controller: LectureCtrl
    });

    $routeProvider.otherwise({redirectTo: '/home'});
});
