/**
 * This controller implements editing of a new teacher
 * @name TeacherAddCtrl
 */
APP.Ctrls.TeacherEditCtrl = function ($scope, $routeParams, $location) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
    $scope.readyText = "Сохранить";
    /**
     * Submits information about updated teacher
     * @name submit
     * After submit user will be redirected to page of teacher
     */
    $scope.submit = function () {
        APP.Data.updateHuman($scope.human);
        $scope.newURI = "/teachers/" + $scope.id;
        $location.path($scope.newURI);
    };
    /**
     * resets form
     * @name reset
     * After resets user will be redirected to the list view
     */
    $scope.reset = function () {
        $scope.newURI = "/teachers/" + $scope.id;
        $location.path($scope.newURI);
    };
};