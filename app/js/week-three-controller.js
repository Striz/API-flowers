angular.module('app');
app.controller('flowerCtrl', function($scope, $http) {
  $http.get('https://pixabay.com/api/?key=4407244-9625ccca0ecb78e4848b4e503&q=yellow+flowers&image_type=photo')
    .then(function(images){
      $scope.images = images.data.hits;
    });
   });