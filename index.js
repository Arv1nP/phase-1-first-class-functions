function receivesAFunction(callback) {
    callback();
  }  
  function returnsANamedFunction() {
    function namedFunction() {
      a+1
    }
    return namedFunction;
  }
  function returnsAnAnonymousFunction() {
    return function() {
     b - a
    };
  }
  