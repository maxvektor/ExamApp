/**
 * This is controller of the Lectures page
 * @name LecturesListCtrl
 */
APP.Ctrls.LecturesListCtrl = function ($scope) {
    $scope.lectures = APP.Data.Tables.lectures;
    /**
     * Returns name of the teacher related to current lecture
     * @name humanName
     * @param {number} id - id of related teacher
     * @return{string} full name of the teacher
     */
    $scope.humanName = function (id) {
        var teacher = APP.Data.getHuman(id);
        return teacher.fName + " " + teacher.lName;
    };
};