/* http://docs.angularjs.org/#!angular.widget */

angular.widget('@my:tabs', function(arrayProperty, compileElement) {
  var compiler = this;
  var sequence = 0;
  var template = $('.template', compileElement).hide();
  compileElement.append("<ul></ul>");
  compileElement.tabs();
  return function(linkElement) {
    var scope = this;
    function createNewTab(i) {
      var newId = 'tab' + sequence++;
      var newTab = template.clone().show().attr('id', newId);
      linkElement.append(newTab);
      linkElement.tabs('add', '#'+newId, 'label');
    } 
    scope.$watch(arrayProperty+'.length', function(length, oldLength) {
      var last = length - 1;
      var i;
      if (length > oldLength) {
        for (i = oldLength; i < length; i++) {
          createNewTab(i);
        }
      } else if (length < oldLength) {
        for (i = length; i < oldLength; i++) {
          linkElement.tabs('remove', last);
        }
      } else {
        for (i=0; i<length; i++) {
          createNewTab(i);
        }
      }
    });
  };
});