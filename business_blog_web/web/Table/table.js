
var taskapp1 = angular.module('taskapp1', []);


var mainController = function ($scope) {
    $scope.ProductOrderList = [
            {
                id: 1,
                ProductName: "Bags",
                floatUnitPrice: 23.4,
                quantity: 1,
            },
             {
                 id: 2,
                 ProductName: "Trousers",
                 floatUnitPrice: 30,
                 quantity: 1,
             },


    ]




    $scope.getTotal = function () {

        var result = 0;
        for (var pro in $scope.ProductOrderList) {
            result = result + ($scope.ProductOrderList[pro].floatUnitPrice * $scope.ProductOrderList[pro].quantity)
        }

        return result;
    }

}
taskapp1.controller('mainController', mainController);


