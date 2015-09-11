'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('myApp.view1', ['ngRoute','firebase'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', ['$firebaseObject','$firebaseArray','$scope',function($firebaseObject,$firebaseArray,$scope) {
				var ref = new Firebase('https://blazing-torch-4150.firebaseio.com');
        
        $scope.messages=$firebaseArray(ref);
        
        $scope.addMessage= function(){
        $scope.messages.$add({text:$scope.newMessageText})
        }
        
	}]);
});

