// CONTROLLERS
ramadanApp.controller("homeController", [
  "$scope",
  "$location",
  "$window",
  "$resource",
  "$http",
  function($scope, $location, $window, $resource, $http) {
    //    $http.get('movies.json').success(function (data){
    //        console.log('Data '+data);
    //        $scope.movies = data;
    //	});

    $scope.loading = true;
    $http.get('https://9vcj1fbemk.execute-api.us-east-1.amazonaws.com/Live').success(function (data){
    //$http.get("prayers.json").success(function(data) {
      console.log("Data " + data[0]['Name']);
      $scope.countries = data;
      $scope.loading = false;
    });

    $scope.getClass = function(date) {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = dd + "-" + mm + "-" + yyyy;
      //today = '07-05-2019';
      if (today === date) return "table-warning";
    };

    $scope.tConvert = function(fullTime) {
      var time = fullTime.split(" ")[0];
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? " ص" : " م"; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
      }
      return time.join(""); // return adjusted time or original string
    };
  }
]);
