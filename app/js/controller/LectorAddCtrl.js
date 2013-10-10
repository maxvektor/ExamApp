function LectorAddCtrl($scope, $location) {
    $scope.human = {};
    $scope.human.social = {};
    $scope.human.photos = {};
    $scope.human.roleId = 2;
    $scope.readyText = "Добавить";

    $scope.submit = function () {
        $scope.id = APP.Data.getMaxHumanId();
        APP.Data.addLector($scope.human, $scope.id);
        $scope.newURI = "/lectors/" + $scope.id;
        $location.path($scope.newURI);
    };

    $scope.reset = function(){
        $scope.newURI = "/lectors/";
        $location.path($scope.newURI);
    };
}