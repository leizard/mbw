// Controller for sorting new wallpapers

angular.module('SortNewCtrl',[]).controller('SortNewController', function ($scope, InstagramService) {
    $scope.tagline = "Stay HUNGRY! Stay FOOLISH!";

    $scope.layout = 'grid';

    // use the InstagramService to fetch a list of pics
    $scope.pics = [];
    InstagramService.fetchPopular(function(data){
        $scope.pics = data;
    });
});
