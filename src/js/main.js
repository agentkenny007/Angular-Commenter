import angular from 'angular';
import Controller from './controllers/controller';
import SERVER from './server-constant'

angular
   .module('app',[])
   .constant('SERVER', SERVER)
   .controller('Controller', Controller)
   .controller('FormController', ['$scope', 'SERVER', '$http', function($scope, SERVER, $http){
       $scope.addComment = comment => {
           $http.post(SERVER.URL, comment).then(resp => {
               $scope.comment = {};
               $scope.Commenter.$setPristine();
               $scope.comments.push(resp.data);
           });
       };
   }]);
