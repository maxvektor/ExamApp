var main = angular.module('main', [], function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/statics/main.html'
    });
    $routeProvider.when('/teachers', {
        templateUrl: 'app/partials/people-list.html',
        controller: TeacherListCtrl
    });
    $routeProvider.when('/teachers/add', {
        templateUrl: 'app/partials/teachers-add-edit.html',
        controller: TeacherAddCtrl
    });

    $routeProvider.when('/teachers/:id/edit', {
        templateUrl: 'app/partials/teachers-add-edit.html',
        controller: TeacherEditCtrl
    });

    $routeProvider.when('/teachers/:id', {
        templateUrl: 'app/partials/teacher.html',
        controller: TeacherCtrl
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
