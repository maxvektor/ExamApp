function StudentCtrl($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.human = APP.Data.getHuman($scope.id);
    $scope.city = $scope.human.city;
    $scope.fb = $scope.human.social.fb;
    $scope.vk= $scope.human.social.vk;
    $scope.git = $scope.human.social.git;
    $scope.ya = $scope.human.social.ya;
}