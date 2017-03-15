'use strict';

describe('Controller: Rota1Ctrl', function () {

  // load the controller's module
  beforeEach(module('imobiliariaApp'));

  var Rota1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Rota1Ctrl = $controller('Rota1Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Rota1Ctrl.awesomeThings.length).toBe(3);
  });
});
