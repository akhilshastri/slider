/**
 * Created by admin on 8/20/2014.
 */
angular.module('app.directives', [])
    .directive('cSlider', [function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                $('.add-remove').slick({
                    slidesToShow: 3,
                    slidesToScroll: 3
                });
                var slideIndex = 1;
                $('.js-add-slide').on('click', function () {
                    slideIndex++;
                    $('.add-remove').slickAdd('<div><h3>' + slideIndex + '</h3></div>');
                });

                $('.js-remove-slide').on('click', function () {
                    $('.add-remove').slickRemove(slideIndex - 1);
                    if (slideIndex !== 0) {
                        slideIndex--;
                    }
                });
            }
        }
    }])
;