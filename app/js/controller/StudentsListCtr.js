function StudentsListCtrl($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.cureId = "2";
    $scope.group = "students";

    $scope.remove = function (id) {
        APP.Data.removeHuman(id);
    };

    $scope.collapse = function(index){
        var human = $scope.people[index];
        human.isCollapsed = human.isCollapsed ? false : true;
    };
}
