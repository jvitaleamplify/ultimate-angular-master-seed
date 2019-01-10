var root = {
  templateUrl: './root.html'
};

angular
  .module('root')
  .component('root', root).config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);
