/**
 * Created by admin on 8/20/2014.
 */
angular.module('app.directives', [])
    .directive('cSlider', [function () {
        var slickTemplate = function (imageSrc) {
            return '<div> <div class="image"><img data-lazy="' + imageSrc + '"/></div></div>'
        };
        return {
            restrict: 'E',
            replace: true,
            scope: {images: "="},
            template: '<div class="slider" ></div>', link: function (scope, element, attrs) {
                /*$('.add-remove').slick({
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
                 });*/
                debugger;
                var jqEl = jQuery(element);

                function buildCarousel() {

                    var slkApplied = jqEl.get('slicked') ? true : false;

                    if (slkApplied) {
                        jqEl.unslick();
                    }
                    var elms = [];
                    for (var img = 0; img < scope.images.length; img++) {
                        var temp = slickTemplate(scope.images[img]);
                        elms.push(temp);
                    }

                    /*element.html(elms.join(' ')) ;
                     jQuery(document).ready(function(){
                     jqEl.slick({
                     lazyLoad: 'ondemand',
                     slidesToShow: 3,
                     slidesToScroll: 1,
                     arrows: true,
                     dots: true,
                     speed: 500
                     });
                     }) ;*/
                }


                scope.$watch('images', function () {
                    debugger;
                    buildCarousel();
                });

                /*$('.your-slider').unslick();
                 jQuery(element).slick*/
            }
        }
    }])
;