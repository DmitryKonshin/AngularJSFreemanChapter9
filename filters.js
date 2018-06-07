angular.module("exampleApp.Filters", []).filter("dayName", function () {
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return function (input) {
        var day = getNameOfDay(input);

        return day == "Thursday" ? "Thursday" : "not Thursday";
    }

    function getNameOfDay(input) {
        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = "unknown";

        if (angular.isNumber(input)) {
            day = dayNames[input];
        }

        return day;
    }
});