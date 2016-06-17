var app = angular.module('matanga', []);



app.controller('MatangaCtrl', function($scope){
    
    $scope.classicArray = [];
    $scope.matangaArray = {};
    
    for (var i = 1; i <= 60; i++) {
        $scope.classicArray.push(i);
    }
    
    $scope.shuffle = function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle…
        while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    };
    
    $scope.buildMatanga = function(array) {
       var strOut="";
       var order = 0;
       for (var i = 1; i <= 10; i++) {
           strOut="";
           for (var x=1; x <= 6; x++) {
               strOut=strOut+((x!=1)?",":"")+array[order];
               order++;
           }
           $scope.matangaArray[i] = strOut;
        }
        return $scope.matangaArray;
    }
    
    $scope.ngLog = function(array){
        console.log(array);
    };
    
});