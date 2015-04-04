'use strict';

angular.module('swTodoApp')
  .controller('MainCtrl', function ($scope, $http, $log, socket) {
    $scope.awesomeThings = [];
    $scope.newTodo = {
      name: '',
      info: null
    };

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', $scope.newTodo).success(function (data) {
        $log.log(data);
        $scope.newTodo.name = '';
        $scope.newTodo.info = null;
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
  });
