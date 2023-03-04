// Module Method Sample

const myModule1 = (function() {
    // private variables and functions
    let privateVar = 0;
  
    function privateMethod() {
      console.log('This is a private method');
    }
  
    // public API
    return {
      publicVar: 'This is a public variable',
      publicMethod: function() {
        console.log('This is a public method');
        privateVar++;
        privateMethod();
      }
    };
  })();
  
  console.log(myModule.publicVar); // outputs: "This is a public variable"
  
  myModule.publicMethod(); // outputs: "This is a public method" and "This is a private method"

  // Module method Second sample

  const calculator = (() => {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    add,
    sub,
    mul,
    div,
  };
})();

calculator.add(3,5); // 8
calculator.sub(6,2); // 4
calculator.mul(14,5534); // 77476

// Revealing Module Pattern

var myModule = (function() {
    'use strict';
  
    var _privateProperty = 'Hello World';
    var publicProperty = 'I am a public property';
  
    function _privateMethod() {
      console.log(_privateProperty);
    }
  
    function publicMethod() {
      _privateMethod();
    }
  
    return {
      publicMethod: publicMethod,
      publicProperty: publicProperty
    };
  })();
  
  myModule.publicMethod(); // outputs 'Hello World'
  console.log(myModule.publicProperty); // outputs 'I am a public property'
  console.log(myModule._privateProperty); // is undefined protected by the module closure
  myModule._privateMethod(); // is TypeError protected by the module closure