import angular from 'angular';
import Controller from './controllers/controller';
import SERVER from './server-constant'

angular
   .module('app',[])
   .constant('SERVER', SERVER)
   .controller('Controller', Controller);
