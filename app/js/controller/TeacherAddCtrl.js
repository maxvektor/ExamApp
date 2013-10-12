/**
 * This controller implements adding of a new teacher
 * @name TeacherAddCtrl
 */
APP.Ctrls.TeacherAddCtrl = function ($scope, $location) { //TODO: Think about how to join similar controllers
    $scope.human = {};
    $scope.human.social = {};
    $scope.human.photos = {};
    $scope.human.roleId = 1;
    $scope.readyText = "Добавить";
    /**
     * Submits information about new teacher
     * @name submit
     * After submit user will be redirected to page of new teacher
     */
    $scope.submit = function () {
        $scope.id = APP.Data.addHuman($scope.human);
        $scope.newURI = "/teachers/" + $scope.id;
        $location.path($scope.newURI);
    };
    /**
     * resets form
     * @name reset
     * After resets user will be redirected to the list view
     */
    $scope.reset = function () {
        $scope.newURI = "/teachers/";
        $location.path($scope.newURI);
    };
};