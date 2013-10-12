APP.Ctrls.TeacherCtrl = function ($scope, $routeParams) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
};