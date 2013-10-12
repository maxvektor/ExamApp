function StudentAddCtrl($scope, $location) {
    $scope.human = {};
    $scope.human.social = {};
    $scope.human.photos = {};
    $scope.human.roleId = 2;
    $scope.readyText = "Добавить";

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

    $scope.reset = function () {
        $scope.newURI = "/students/";
        $location.path($scope.newURI);
    };
}