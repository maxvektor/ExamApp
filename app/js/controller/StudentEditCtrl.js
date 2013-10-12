/**
 * This controller implements editing of the student
 * @name StudentEditCtrl
 */
APP.Ctrls.StudentEditCtrl = function ($scope, $routeParams, $location) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
    $scope.city = APP.Data.getCity($scope.human.city).name;
    $scope.readyText = "Сохранить";
    /**
     * Submits information about updated student
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
        APP.Data.updateHuman($scope.human);
        $scope.newURI = "/students/" + $scope.id;
        $location.path($scope.newURI);
    };
    /**
     * resets form
     * @name reset
     * After resets user will be redirected to the list view
     */
    $scope.reset = function () {
        $scope.newURI = "/students/" + $scope.id;
        $location.path($scope.newURI);
    };
};