angular.module("exampleApp.Services", [])
        .service("days", function (nowValue) {
            this.today = nowValue.getDay();
            this.tomorrow = this.today + 1;
        });