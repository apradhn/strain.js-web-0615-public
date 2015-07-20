'use strict';

var strain = {
  keep: function(array, fn) {
    var keeps = [];
    var elem;

    if (array.length) {
      for (var i = 0; i < array.length; i++) {
        elem = array[i];
        if (fn(elem)) keeps.push(elem);
      };
    }
    return keeps;

  },

  discard: function(array, fn) {
    var discards = [];
    var elem;

    if (array.length) {
      for (var i = 0; i < array.length; i++) {
        elem = array[i];

        if (!fn(elem)) discards.push(elem);
      };
    }
    return discards;
  }

};

