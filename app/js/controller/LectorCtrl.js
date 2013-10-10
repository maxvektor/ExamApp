function LectorCtrl($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.human = APP.Data.getHuman($scope.id);
}