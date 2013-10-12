function LectorListCtrl($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.groupId = "1";
    $scope.groupName = "lectors";

    $scope.remove = function (id) {
        APP.Data.removeHuman(id);
    };

    $scope.collapse = function (id) {
        var index = APP.Data.getHumanIndexById(id),
        human = $scope.people[index];
        human.isCollapsed = !human.isCollapsed;
    };
}