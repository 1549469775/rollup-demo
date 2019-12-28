var MyBundle = (function () {
  'use strict';

  function logA() {
    console.log('function logA called');
  }

  console.log(12345);

  return logA;

}());
