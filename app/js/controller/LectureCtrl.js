/**
 * This is controller of the single lecture page
 * @name LectureCtrl
 */
APP.Ctrls.LectureCtrl = function ($scope, $routeParams) {
    $scope.id = parseInt($routeParams.id);
    $scope.lecture = APP.Data.getLecture($scope.id);
    $scope.teacher = APP.Data.getHuman($scope.lecture.teacher_id);
    $scope.comments = APP.Data.Tables.comments;
};