function LectorEditCtrl($scope, $routeParams, $location) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);
    $scope.readyText = "Сохранить";

    $scope.submit = function () {
        APP.Data.updateHuman($scope.human);
        $scope.newURI = "/lectors/" + $scope.id;
        $location.path($scope.newURI);
    };

    $scope.reset = function () {
        $scope.newURI = "/lectors/" + $scope.id;
        $location.path($scope.newURI);
    };
}