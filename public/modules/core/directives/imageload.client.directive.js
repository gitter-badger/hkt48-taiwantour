'use strict';

angular.module('core').directive('imageload', [
  function() {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var cssClass = attrs.loadedclass;
        element.bind('load', function(e) {
          angular.element(element).addClass(cssClass);
        });
      }
    };
  }
]);