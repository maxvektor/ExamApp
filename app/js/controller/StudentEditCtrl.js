APP.Ctrls.StudentEditCtrl = function ($scope, $routeParams, $location) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
    $scope.city = APP.Data.getCity($scope.human.city).name;
    $scope.readyText = "Сохранить";

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

    $scope.reset = function () {
        $scope.newURI = "/students/" + $scope.id;
        $location.path($scope.newURI);
    };
};