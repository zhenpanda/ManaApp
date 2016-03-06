// Modular Javascript (Do one thing, do it well)
// separation of concerns DRY

// object literal pattern
// var myModule = {
//   name: 'Will',
//   age: 34,
//   sayName: function() {
//     alert(this.name);
//   },
//   setName: function(newName) {
//     this.name = newName;
//   }
// };

//myModule.sayName();

/* Object literal Pattern */

// (function() {
//   var people = {
//       people: [],
//       //init kicks off the code
//       init: function() {
//         this.cacheDom();
//       },
//       cacheDom: function() {
//         //this.button = 
//       },
//       render: function() {

//       }
//   };

//   //start the module
//   people.init();

// })();

/* Reavealing Module Pattern */
// more ruby like design

// () just eval watever is inside of it in js

var people = (function() {
  //private variable
  var name = 'Will';
  function sayName() {
    alert(name);
  };

  return {
    sayYourName: sayName
  };

})();



