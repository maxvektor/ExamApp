/**
 * This is controller of the single Student page
 * @name StudentCtrl
 */
APP.Ctrls.StudentCtrl = function ($scope, $routeParams, $location) {
    $scope.id = parseInt($routeParams.id);
    $scope.human = APP.Data.getHuman($scope.id);//TODO: check for presents of the object fields
    if (APP.Data.getCity($scope.human.city)) {
        $scope.city = APP.Data.getCity($scope.human.city).name;
    } else {
        $scope.city = null;
    }
    if ($scope.human && $scope.human.social) {
        $scope.fb = $scope.human.social.fb;
        $scope.vk = $scope.human.social.vk;
        $scope.git = $scope.human.social.git;
        $scope.ya = $scope.human.social.ya;
    }
    /**
     * Removes student from APP.Data.Tables.people
     * @name remove
     * @param {string} id
     * redirection after remove
     */
    $scope.remove = function (id) {
        $scope.remove = function (id) {
            if (confirm("Удалить студента?")) {
                APP.Data.removeHuman(id);
                $scope.newURI = "/students/";
                $location.path($scope.newURI);
            }
        };
    };

    /**
     * This function initializing map on the page if ymaps is ready
     * @name initializeMap
     * calls on ng-init
     */
    $scope.initializeMap = function () {
        var mapOptions = {
                center: [50.5, 30.5],
                zoom: 11
            },
            mapContainer = "map";

        ymaps.ready(function () {
            ymaps.geocode($scope.city, { results: 1 }).then(
                function (res) {
                    var coords = res.geoObjects.get(0).geometry.getCoordinates(),
                        map;
                    mapOptions.center = coords;
                    $scope.map = new ymaps.Map(mapContainer, mapOptions);
                    myPlacemark1 = new ymaps.Placemark(coords,
                        {
                            iconContent: "<img src='" + $scope.human.photos.m + "'>"
                        },
                        {
                            preset: 'twirl#redStretchyIcon'
                        });
                    $scope.map.geoObjects.add(myPlacemark1);
                });
        });
    };
};