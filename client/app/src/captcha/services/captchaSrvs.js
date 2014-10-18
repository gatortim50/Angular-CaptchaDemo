(function () {
  "use strict";

/**
 * @ngdoc overview
 * @name captchaSrvc
 * @description
 * # captchaSrvc
 *
 * service that gets the data - the captcha
 */

  var captchaSrvc = function ($http) {

    return {

      getCaptcha: function () {

        var url = 'http://127.0.0.1:3000/captcha';

        return $http.get(url)
          .then(function(response){
            return response.data;
          });

      }

    };

  };

  captchaSrvc.$inject = ['$http'];

  angular.module('clientApp').factory('captchaSrvc', captchaSrvc);


}());