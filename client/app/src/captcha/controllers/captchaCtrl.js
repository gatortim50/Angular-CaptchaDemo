(function () {
  "use strict";

/**
 * @ngdoc overview
 * @name capchaCtrl
 * @description
 * # capchaCtrl.js
 *
 * Main controller of the application.
 */

  var captchaCtrl = function ($scope, localStorageService, captchaSrvc) {

    $scope.solved = false;

    function clearAll() {
      console.log("no search results clear localstorage");
      return localStorageService.clearAll();
    }

    var onComplete = function(data){
      var rs = data.captcha;
      $scope.data =  rs.toUpperCase();
      console.log("captcha: " + JSON.stringify($scope.data));
      localStorageService.set('captchaData', $scope.data);
    };

    var onError = function(reason){
      clearAll();
      $scope.error = reason;
    };

    captchaSrvc.getCaptcha()
      .then(onComplete, onError);

    // reset and refresh captcha
    $scope.reset = function (captchaForm) {
      console.log("=== reset form ===");
      $scope.solved = false;

      captchaSrvc.getCaptcha()
        .then(onComplete, onError);
    };

    // submit the data
    $scope.doSubmit = function (captchaForm) {
      //console.log("****--- doSubmit: " + $scope.data + " " + captchaForm.captcha);
      if ($scope.data == captchaForm.captcha) {
        console.log(  "u da captcha daddy" );
        $scope.solved = true;
        setTimeout(function(){$scope.solved = false;},300)
      }
    };

  };

  captchaCtrl.$inject = ['$scope', 'localStorageService', 'captchaSrvc'];

  angular.module('clientApp').controller('captchaCtrl', captchaCtrl);

}());