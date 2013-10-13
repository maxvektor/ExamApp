/**
 * This is helper controller for comments implementation
 * @name CommentsCtrl
 */
APP.Ctrls.CommentsCtrl = function ($scope) {
    /**
     * Adds comment to data table
     * @name submit
     * After submit form will be reset
     */
    $scope.submit = function () {
        $scope.comment = {
            name: $scope.name,
            text: $scope.text,
            lessonId: $scope.lecture.id
        };
        APP.Data.addComment($scope.comment);
        $scope.name = "";
        $scope.text = "";
    };
};