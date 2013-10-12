/**
 * This is controller of the single Teacher page
 * @name TeacherCtrl
 */
APP.Ctrls.TeacherCtrl = function ($scope, $routeParams) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
};