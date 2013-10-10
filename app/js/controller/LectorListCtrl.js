function LectorListCtrl($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.cureId = "1";
    $scope.group = "lectors";

    $scope.remove = function (id) {
        APP.Data.removeHuman(id);
    };

    $scope.collapse = function (index) {
        var human = $scope.people[index];
        human.isCollapsed = human.isCollapsed ? false : true;
    };
}