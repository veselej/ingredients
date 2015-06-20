/**
 * Created by bionaut on 14/06/15.
 */

(function(){
  'use strict';
  angular.module('iValid.module')
    .config(Config);

  Config.$inject = ['iValidProvider'];
  function Config(iValidProvider) {

    iValidProvider.newValidator('maxLength', maxLength, 'This is too long!');
    iValidProvider.newValidator('minLength', minLength, 'Too short!');

    function maxLength(value, max) {
      if (!value) return void 0;
      value = value.toString();
      return value.length <= max;
    }

    function minLength(value, min) {
      if (!value) return void 0;
      value = value.toString();
      return value.length >= min;
    }

  }
})();
