function StudentsListCtrl($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.cureId = "2";

    $scope.remove = function (index) {
        var id = $scope.people[index].id;
        APP.Data.removeHuman(id);
    };

}
