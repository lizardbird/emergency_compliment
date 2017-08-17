/* global angular */
`use strict`;

(function () {
  var app = angular.module('angularComp')
  app.controller('mainController', MainController)

  function MainController () {
    var vm = this
    var randomIndex = Math.floor(Math.random() * data.length)
    vm.data = data[randomIndex]
  }
}())
