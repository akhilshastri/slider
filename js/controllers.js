/**
 * Created by admin on 8/20/2014.
 */
angular.module('app.controllers', [])
    .controller('mainCnt', [ '$scope', function ($scope) {
        $scope.imagesPath = [
            "img/lazyfonz1.png"
            , "img/lazyfonz2.png"
        ];

        var carousel;
        $scope.loadPage = function (page, tmplCb) {
            var carouselPageScope = $scope.$new();
            // Assign / load all the items you want to carouselPageScope.
            // Do work
            // Ensure that the carousel knows how many total pages there are
            carousel.updatePageCount(totalPages);
            tmplCb(carouselPageScope);
        };
        $scope.onCarouselAvailable = function (car) {
            carousel = car;
        };
        $scope.hasNext = function () {
            return carousel ? carousel.hasNext() : false;
        };
        $scope.hasPrevious = function () {
            return carousel ? carousel.hasPrevious() : false;
        };
        $scope.next = function () {
            if (carousel) carousel.next();
        };
        $scope.prev = function () {
            if (carousel) carousel.prev();
        };

    }])
;