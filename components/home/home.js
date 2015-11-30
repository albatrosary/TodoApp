(function () {
  'use strict';

  angular
    .module('TodoApp.components.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];

  var vm;

  function HomeController() {
    console.log('HomeController Constructor');
    vm = this;
    vm.contents = 'home page';
  }
})();