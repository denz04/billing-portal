'use strict';
angular.module('billingPortalApp')
  .controller('loginController', function ($state) {
  	var login = this;
  	login.checkNumber = function () {
  		if(login.phoneNumber === 9787862014) {
  			$state.go('home');
  		}
  		else {
  			$state.go('register');
  		}
  	};
    login.updateNewUser = function () {
      $state.go('home');
    };
  });
