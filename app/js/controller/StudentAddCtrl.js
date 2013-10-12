/**
 * This controller implements adding of a new student
 * @name StudentAddCtrl
 */
APP.Ctrls.StudentAddCtrl = function ($scope, $location) {
    $scope.human = {};
    $scope.human.social = {};
    $scope.human.photos = {};
    $scope.human.roleId = 2;
    $scope.readyText = "Добавить";

    /**
     * Submits information about new student
     * @name submit
     * After submit user will be redirected to page of new student
     */
    $scope.submit = function () {
        $scope.proxyCity = APP.Data.getCity($scope.city);
        if ($scope.proxyCity) {
            $scope.human.city = $scope.proxyCity.id;
        } else {
            $scope.human.city = APP.Data.addCity($scope.city);
        }
        $scope.id = APP.Data.addHuman($scope.human);
        $scope.newURI = "/students/" + $scope.id;
        $location.path($scope.newURI);
    };
    /**
     * resets form
     * @name reset
     * After resets user will be redirected to the list view
     */
    $scope.reset = function () {
        $scope.newURI = "/students/";
        $location.path($scope.newURI);
    };
};