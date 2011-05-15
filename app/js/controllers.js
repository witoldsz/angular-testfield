/* App Controllers */


function TabsSampleCtrl() {
  var self = this;
  this.persons = [
    {firstName: 'Stefan', lastName: 'Stefanowicz', age: 29},
    {firstName: 'Iwan', lastName: 'Iwanowicz', age: 32},
    {firstName: 'Ziut', lastName: 'Ziuto', age: 17}
  ];
  this.addPerson = function() {
    var rnd = Math.floor(Math.random()*101);
    self.persons.push({firstName:'firstName'+rnd, lastName:'lastName'+rnd});
  }
  this.delPerson = function() {
    self.persons.pop();
  }
}
TabsSampleCtrl.$inject = [];

