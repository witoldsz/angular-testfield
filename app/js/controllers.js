'use strict';

/* Controllers */


function MyCtrl1($scope, $timeout) {
  $scope.i = 0;
  
  (function increment() {
    $timeout(function() {
      ++$scope.i;
      increment();
    }, 1 * 1000);
  })();
}


function MyCtrl2() {
}
MyCtrl2.$inject = [];
