APP = {};
APP.Ctrls={};
APP.main = angular.module('main', [], function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'app/statics/main.html'
    });
    $routeProvider.when('/teachers', {
        templateUrl: 'app/partials/people-list.html',
        controller: APP.Ctrls.TeacherListCtrl
    });
    $routeProvider.when('/teachers/add', {
        templateUrl: 'app/partials/teachers-add-edit.html',
        controller: APP.Ctrls.TeacherAddCtrl
    });

    $routeProvider.when('/teachers/:id/edit', {
        templateUrl: 'app/partials/teachers-add-edit.html',
        controller: APP.Ctrls.TeacherEditCtrl
    });

    $routeProvider.when('/teachers/:id', {
        templateUrl: 'app/partials/teacher.html',
        controller: APP.Ctrls.TeacherCtrl
    });

    $routeProvider.when('/students', {
        templateUrl: 'app/partials/people-list.html',
        controller: APP.Ctrls.StudentsListCtrl
    });
    $routeProvider.when('/students/add', {
        templateUrl: 'app/partials/student-add-edit.html',
        controller: APP.Ctrls.StudentAddCtrl
    });
    $routeProvider.when('/students/:id/edit', {
        templateUrl: 'app/partials/student-add-edit.html',
        controller: APP.Ctrls.StudentEditCtrl
    });
    $routeProvider.when('/students/:id', {
        templateUrl: 'app/partials/student.html',
        controller: APP.Ctrls.StudentCtrl
    });

    $routeProvider.when('/lectures', {
        templateUrl: 'app/partials/lectures-list.html',
        controller: APP.Ctrls.LecturesListCtrl
    });

    $routeProvider.when('/lectures/:id', {
        templateUrl: 'app/partials/lecture.html',
        controller: APP.Ctrls.LectureCtrl
    });

    $routeProvider.otherwise({redirectTo: '/home'});
});
