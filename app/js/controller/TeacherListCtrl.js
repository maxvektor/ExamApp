APP.Ctrls.TeacherListCtrl = function ($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.groupId = "1";
    $scope.groupName = "teachers";

    $scope.remove = function (id) {
        APP.Data.removeHuman(id);
    };

    $scope.collapse = function (id) {
        var index = APP.Data.getHumanIndex(id),
            human = $scope.people[index];
        human.isCollapsed = !human.isCollapsed;
    };
};