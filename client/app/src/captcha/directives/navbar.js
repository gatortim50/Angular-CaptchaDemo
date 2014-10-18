(function (){
  "use strict";

  var navbar = function() {
    return {
      restrict: 'E',
      templateUrl: 'src/captcha/views/navbar.html',
      controller: 'captchaCtrl'
    };

  };

  angular.module('clientApp').directive('navbar', navbar);

}());