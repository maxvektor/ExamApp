/**
 * This is controller of the Teacher List page
 * @name StudentsListCtrl
 */
APP.Ctrls.TeacherListCtrl = function ($scope) {
    $scope.people = APP.Data.Tables.people;
    $scope.groupId = "1";
    $scope.groupName = "teachers";
    /**
     * Removes Teacher from APP.Data.Tables.people
     * @name remove
     * @param {string} id
     */
    $scope.remove = function (id) {
        $scope.remove = function (id) {
            if (confirm("Удалить преподавателя?")) {
                APP.Data.removeHuman(id);
            }
        };
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
