APP.Ctrls.TeacherAddCtrl = function ($scope, $location) { //TODO: Think about how to join similar controllers
    $scope.human = {};
    $scope.human.social = {};
    $scope.human.photos = {};
    $scope.human.roleId = 1;
    $scope.readyText = "Добавить";

    $scope.submit = function () {
        $scope.id = APP.Data.addHuman($scope.human);
        $scope.newURI = "/teachers/" + $scope.id;
        $location.path($scope.newURI);
    };

    $scope.reset = function () {
        $scope.newURI = "/teachers/";
        $location.path($scope.newURI);
    };
};