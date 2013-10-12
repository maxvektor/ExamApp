/**
 * My App namespace
 */
var APP = {};
/**
 * sub namespace for controllers
 */
APP.Ctrls = {};
/**
 * declaration of new module - main modul of MVC application
 * function constance rules for application routing
 */
APP.main = angular.module('main', [], function ($routeProvider) {
    /**
     *   main page is static - no controller
     */
    $routeProvider.when('/home', {
        templateUrl: 'app/statics/main.html'
    });
    /**
     *   view and controller for teachers list view
     */
    $routeProvider.when('/teachers', {
        templateUrl: 'app/partials/people-list.html',
        controller: APP.Ctrls.TeacherListCtrl
    });
    /**
     *   view and controller for teachers add page
     */
    $routeProvider.when('/teachers/add', {
        templateUrl: 'app/partials/teachers-add-edit.html',
        controller: APP.Ctrls.TeacherAddCtrl
    });
    /**
     *   view and controller for teachers edit page
     */
    $routeProvider.when('/teachers/:id/edit', {
        templateUrl: 'app/partials/teachers-add-edit.html',
        controller: APP.Ctrls.TeacherEditCtrl
    });
    /**
     *   view and controller for single teachers page
     */
    $routeProvider.when('/teachers/:id', {
        templateUrl: 'app/partials/teacher.html',
        controller: APP.Ctrls.TeacherCtrl
    });
    /**
     *   view and controller for students list view
     */
    $routeProvider.when('/students', {
        templateUrl: 'app/partials/people-list.html',
        controller: APP.Ctrls.StudentsListCtrl
    });
    /**
     *   view and controller for students add page
     */
    $routeProvider.when('/students/add', {
        templateUrl: 'app/partials/student-add-edit.html',
        controller: APP.Ctrls.StudentAddCtrl
    });
    /**
     *   view and controller for students list view
     */
    $routeProvider.when('/students/:id/edit', {
        templateUrl: 'app/partials/student-add-edit.html',
        controller: APP.Ctrls.StudentEditCtrl
    });
    /**
     *   view and controller for single student page
     */
    $routeProvider.when('/students/:id', {
        templateUrl: 'app/partials/student.html',
        controller: APP.Ctrls.StudentCtrl
    });
    /**
     *   view and controller for lectures list view
     */
    $routeProvider.when('/lectures', {
        templateUrl: 'app/partials/lectures-list.html',
        controller: APP.Ctrls.LecturesListCtrl
    });
    /**
     *   view and controller for single lecture page
     */
    $routeProvider.when('/lectures/:id', {
        templateUrl: 'app/partials/lecture.html',
        controller: APP.Ctrls.LectureCtrl
    });
    /**
     *   default page
     */
    $routeProvider.otherwise({redirectTo: '/home'});
});
