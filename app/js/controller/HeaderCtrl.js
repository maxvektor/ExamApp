/**
 * This is controller of the Header menu
 * @name HeaderCtrl
 */
APP.main.controller('HeaderCtrl', function HeaderCtrl($scope, $location) {
    /**
     * Returns "active" class to current page menu block
     * @name getClass
     * @param {string} path - path of current page
     * @return{string} className - name of the class that you want to assign to the DOM object
     */
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return "active";
        } else {
            return "";
        }
    };
});