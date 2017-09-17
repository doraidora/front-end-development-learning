mainApp.filter('searchFor', function() {
    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function(arr, searchString) {
        if (!searchString) {
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();
        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item) {
            if (item.type.toLowerCase().indexOf(searchString) !== -1) {
                result.push(item);
            };

            if (item.day.toString().indexOf(searchString) !== -1) {
                result.push(item);
            };
            if (item.week.toString().indexOf(searchString) !== -1) {
                result.push(item);
            };
            if (item.month.toString().indexOf(searchString) !== -1) {
                result.push(item);
            };

        });
        return result;
    };
});
mainApp.controller("mainController", function($scope) {

            $scope.kola = {
                cars: [{
                    type: 'Civil',
                    day: 20,
                    week: 100,
                    month: 350,
                    id: 1
                }, {
                    type: 'Transport',
                    day: 35,
                    week: 150,
                    month: 500,
                    id: 2
                }, {
                    type: 'Sport',
                    day: 50,
                    week: 300,
                    month: 900,
                    id: 3
                }, {
                    type: 'SUV',
                    day: 60,
                    week: 350,
                    month: 1000,
                    id: 4
                }]
            };

    $scope.IsVisible1 = false;
    $scope.IsVisible2 = false;
    $scope.IsVisible3 = false;
    $scope.IsVisible4 = false;
   
$scope.ShowHide = function() {
            
          
            $scope.IsVisible1 = $scope.IsVisible1 ? false : false;            
            $scope.IsVisible2 = $scope.IsVisible2 ? false : false;
            $scope.IsVisible3 = $scope.IsVisible3 ? false : false;
            $scope.IsVisible4 = $scope.IsVisible4 ? false : false;
            

        };


      
        $scope.ShowHide1 = function() {
            
          
           $scope.IsVisible1 = $scope.IsVisible1 ? false : false;            
            $scope.IsVisible2 = $scope.IsVisible2 ? true : true;
            $scope.IsVisible3 = $scope.IsVisible3 ? true : true;
            $scope.IsVisible4 = $scope.IsVisible4 ? true : true;
           

        };


        $scope.ShowHide2 = function() {
            //If DIV is visible it will be hidden and vice versa.
            $scope.IsVisible1 = $scope.IsVisible1 ? true : true;
            $scope.IsVisible2 = $scope.IsVisible2 ? false : false;
            $scope.IsVisible3 = $scope.IsVisible3 ? true : true;
            $scope.IsVisible4 = $scope.IsVisible4 ? true : true;
            
          
        };
        $scope.ShowHide3 = function() {
          
            $scope.IsVisible3 = $scope.IsVisible3 ? false : false;
            $scope.IsVisible1 = $scope.IsVisible1 ? true : true;
            $scope.IsVisible2 = $scope.IsVisible2 ? true : true;
            $scope.IsVisible4 = $scope.IsVisible4 ? true : true;
            

        };
        $scope.ShowHide4 = function() {
            //If DIV is visible it will be hidden and vice versa.

            $scope.IsVisible4 = $scope.IsVisible4 ? false : false;
            $scope.IsVisible2 = $scope.IsVisible2 ? true : true;
            $scope.IsVisible3 = $scope.IsVisible3 ? true : true;
            $scope.IsVisible1 = $scope.IsVisible1 ? true : true;
            

        };
       
        });

        mainApp.directive('googleMap', function() {
            return {
                template: '<iframe width="100%" height="350" frameborder="0" style="border:0"></iframe>',
                restrict: 'E',
                scope: {
                    pbcode: '='
                },
                link: function postLink(scope, element) {
                    var mapFrame = element.find("iframe");
                    if (scope.pbcode) {
                        mapFrame.attr('src', "https://www.google.com/maps/embed?pb=" + scope.pbcode);
                    } else {
                        mapFrame.attr('src', '');
                    }
                }
            };
        });
    
