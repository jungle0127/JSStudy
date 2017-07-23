var bookStoreApp = angular.module('bookStoreApp',[
  'ngRoute','ngAnimate','bookStoreCtrls','bookStoreFilters',
  'bookStoreServices','bookStoreDirectives'
]);
bookStoreApp.config(function($routeProvider){
  $routeProvider.when('/hello',{
    templateUrl: 'tpls/hello.html',
    controller: 'HelloCtrl'
  }).when('/list',{
    templateUrl: 'tpls/booklist.html',
    controller: 'BookListController'
  }).otherwise({
    redirectTo:'/hello'
  })
});
