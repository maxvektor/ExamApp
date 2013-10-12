function StudentsListCtrl($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.groupId = "2";
    $scope.groupName = "students";

    $scope.remove = function (id) {
        APP.Data.removeHuman(id);
    };

    $scope.collapse = function (id) {
        var index = APP.Data.getHumanIndexById(id),
            human = $scope.people[index];
        human.isCollapsed = !human.isCollapsed;
    };
}
