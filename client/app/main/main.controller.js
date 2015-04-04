'use strict';

angular.module('swTodoApp')
  .controller('MainCtrl', function ($scope, $http, $animate, $mdToast, $log, socket, swService) {
    $scope.awesomeThings = [];
    $scope.newTodo = {
      name: '',
      info: new Date()
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.updateThing = function (updatedThing) {
      $log.log(updatedThing);
      $http.put('/api/things/' + updatedThing._id, updatedThing);
    };

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $scope.newTodo.info = Date.parse($scope.newTodo.info);
      $http.post('/api/things', $scope.newTodo).success(function (data) {
        $log.log(data);
        $scope.newTodo.name = '';
        $scope.newTodo.info = new Date();
      });
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

    $scope.onClick = function () {
      $scope.addThing();
    };

    swService();

    $scope.showToast = function (string) {
      $mdToast.show(
        $mdToast.simple()
          .content(string)
          .position('top right')
          .hideDelay(2000)
      );
    }
  });
