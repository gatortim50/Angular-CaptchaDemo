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

  var captchaCtrl = function ($scope, captchaSrvc) {

    $scope.solved = false;

    var onComplete = function(data){
      var rs = data.captcha;
      $scope.data =  rs.toUpperCase();
      console.log("captcha: " + JSON.stringify($scope.data));
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
      console.log('captchaForm submitted', captchaForm.captcha);
      if(captchaForm.captcha === angular.undefined ||
          captchaForm.captcha === null){
        console.log('nothing submitted');
        return;
      }
      console.log("**** doSubmit: " + $scope.data + " " + captchaForm.captcha.toUpperCase());
      if ($scope.data === captchaForm.captcha.toUpperCase()) {
        console.log(  "u da captcha daddy" );
        $scope.solved = true;
        setTimeout(function(){$scope.solved = false;},300)
      }
    };

  };

  captchaCtrl.$inject = ['$scope', 'captchaSrvc'];

  angular.module('clientApp').controller('captchaCtrl', captchaCtrl);

}());
