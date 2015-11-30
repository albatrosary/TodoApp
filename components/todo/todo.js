(function () {
  'use strict';

  angular
    .module('TodoApp.components.todo', [])
    .controller('TodoController', TodoController);

  TodoController.$inject = [];

  var vm;

  function TodoController() {
    console.log('TodoController Constructor');
    vm = this;
    vm.todoList = [];
  }
  
  TodoController.prototype.activate = function() {
  };

  TodoController.prototype.addTodo = function () {
    vm.todoList.push(vm.item);
    vm.item = '';
  };

  TodoController.prototype.removeTodo = function (index) {
    vm.todoList.splice(index, 1);
  };
})();