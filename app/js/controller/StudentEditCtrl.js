function StudentEditCtrl($scope, $routeParams,$location) {
    $scope.id = $routeParams.id;
    $scope.human = APP.Data.getStudent($scope.id);
    $scope.city = APP.Data.getCity($scope.human.city);
    $scope.submit = function(){
        $scope.human.city = APP.Data.getCityId($scope.city);
        APP.Data.updateHumanById($scope.id,$scope.human);
        $scope.newURI = "/students/"+$scope.id;
        $location.path($scope.newURI);
    }
}