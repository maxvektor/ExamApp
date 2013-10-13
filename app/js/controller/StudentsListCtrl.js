/**
 * This is controller of the Students List page
 * @name StudentsListCtrl
 */
APP.Ctrls.StudentsListCtrl = function ($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.groupId = "2";
    $scope.groupName = "students";
    /**
     * Removes student from APP.Data.Tables.people
     * @name remove
     * @param {string} id
     * needs confirm
     */
    $scope.remove = function (id) { //TODO: custom confirm?
        if (confirm("Удалить студента?")) {
            APP.Data.removeHuman(id);
        }
    };
    /**
     * Sets to human new field isCollapsed or toggles isCollapsed state;
     * @name collapse
     * @param {string} id
     * @deprecated
     */
    $scope.collapse = function (id) {
        var index = APP.Data.getHumanIndex(id),
            human = $scope.people[index];
        human.isCollapsed = !human.isCollapsed;
    };
};
