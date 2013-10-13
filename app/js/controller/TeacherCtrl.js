/**
 * This is controller of the single Teacher page
 * @name TeacherCtrl
 */
APP.Ctrls.TeacherCtrl = function ($scope, $routeParams, $location) {//TODO:conformation on delete
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
    $scope.lectures = APP.Data.Tables.lectures;
    /**
     * Removes teacher from APP.Data.Tables.people
     * @name remove
     * @param {string} id
     * redirection after remove
     */
    $scope.remove = function (id) { //TODO: maybe put remove functionality to some service?
        if (confirm("Удалить преподавателя?")) {
            APP.Data.removeHuman(id);
            $scope.newURI = "/teachers/";
            $location.path($scope.newURI);
        }
    };
};