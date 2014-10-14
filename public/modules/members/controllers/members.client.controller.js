'use strict';

// Members controller
angular.module('members').controller('MembersController', ['$scope', '$filter', '$http', '$stateParams', '$location', 'Authentication', 
  function($scope, $filter, $http, $stateParams, $location, Authentication) {
    $scope.authentication = Authentication;

    // Find a list of Members
    $scope.find = function() {
      $http.get('modules/members/members.json').success(function(data) {
        $scope.members = data;
      });
    };

    // Find existing Member
    $scope.findOne = function() {
      $http.get('modules/members/members.json').success(function(data) {
        // find member object by full name
        var member = $filter('getMemberIdByFullName')(data, $stateParams.memberFullName);
        // use member ID to get tabletop data
        Tabletop.init({
          key: '1MlbQ8V-O2Q3vGmquuzqUV4whqtlTpzkKF6VFNTgsYx4',
          query: 'memberid = ' + member.memberid,
          callback: function(data, tabletop) {
            console.log(tabletop.sheets('member').all());
            console.log(tabletop.sheets('keyword').all());
            console.log(tabletop.sheets('relationship').all());
            console.log(tabletop.sheets('image').all());
            $scope.$apply(function() {
              $scope.member = tabletop.sheets('member').all()[0];
              $scope.keywords = tabletop.sheets('keyword').all();
              $scope.relationships = tabletop.sheets('relationship').all();
              $scope.images = tabletop.sheets('image').all();
            });
          }
        });
      });
    };
  }
]);
