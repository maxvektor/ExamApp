function StudentAddCtrl($scope, $location) {
    $scope.human = {};
    $scope.human.social = {};
    $scope.human.photos = {};
    $scope.human.roleId = 2;
    $scope.readyText = "Добавить";
    $scope.submit = function () {
        $scope.id = APP.Data.getMaxHumanId();
        $scope.human.city = APP.Data.getCityId($scope.city);
        APP.Data.addStudent($scope.human, $scope.id);
        $scope.newURI = "/students/" + $scope.id;
        $location.path($scope.newURI);
    };
    $scope.reset = function(){
        $scope.newURI = "/students/";
        $location.path($scope.newURI);
    };
}