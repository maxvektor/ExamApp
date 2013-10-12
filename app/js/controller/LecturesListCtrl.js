function LecturesListCtrl($scope) {
    $scope.lectures = APP.Data.Tables.lectures;
    $scope.humanName = function (id) {
        var lector = APP.Data.getHuman(id);
        return lector.fName + " " + lector.lName;
    };
}