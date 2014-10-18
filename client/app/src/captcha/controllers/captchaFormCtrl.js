(function () {
  "use strict";

/**
 * @ngdoc overview
 * @name captchaFormCtrl.js
 * @description
 * # captchaFormCtrl
 *
 * child controller to captchaCtrl.js
 */

  var captchaFormCtrl = function ($scope, localStorageService) {

    // get the data from localStorage
    var data = localStorageService.get('captchaData');
    //console.log("localStorageService: " + JSON.stringify(data));

    if (data == null || data == undefined) {
      return;
    } else {
      $scope.data = data;
    }

  };

  captchaFormCtrl.$inject = ['$scope', 'localStorageService'];

  angular.module('clientApp').controller('captchaFormCtrl', captchaFormCtrl);

}());
