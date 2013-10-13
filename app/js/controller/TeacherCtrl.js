/**
 * This is controller of the single Teacher page
 * @name TeacherCtrl
 */
APP.Ctrls.TeacherCtrl = function ($scope, $routeParams, $location) {//TODO:conformation on delete
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);

    /**
     * Removes teacher from APP.Data.Tables.people
     * @name remove
     * @param {string} id
     * redirection after remove
     */
    $scope.remove = function (id) {
        APP.Data.removeHuman(id);
        $scope.newURI = "/teachers/";
        $location.path($scope.newURI);
    };
};