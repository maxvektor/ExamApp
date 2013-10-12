APP.Ctrls.LecturesListCtrl = function ($scope) {
    $scope.lectures = APP.Data.Tables.lectures;
    $scope.humanName = function (id) {
        var teacher = APP.Data.getHuman(id);
        return teacher.fName + " " + teacher.lName;
    };
};