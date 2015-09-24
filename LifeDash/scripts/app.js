var lifeDashApp;
(function (lifeDashApp) {
    //Create TypeScript module namespace essentially.
    //Create the angular module within TypeScript. this gives it the IIFE
    var main = angular.module("lifeDashApp", ["ngRoute"]); //This is for temp HTTP resource mocking. remove
    //this if we want to use a different service.
    main.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"]; //Specifies the route prerameter. Ensures this works propertly even after minification.
    function routeConfig($routeProvider) {
        $routeProvider
            .when("/dashboard", {
            templateUrl: "app/views/dashView.html",
            controller: "DashViewController as vm"
        })
            .when("/admin", {
            templateUrl: "app/views/adminview.html",
            controller: "AdminViewController as vm"
        })
            .otherwise("/dashboard");
        //    class Greeter {
        //        element: HTMLElement;
        //        span: HTMLElement;
        //        timerToken: number;
        //        constructor(element: HTMLElement) {
        //            this.element = element;
        //            this.element.innerHTML += "The time is: ";
        //            this.span = document.createElement('span');
        //            this.element.appendChild(this.span);
        //            this.span.innerText = new Date().toUTCString();
        //        }
        //        start() {
        //            this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
        //        }
        //        stop() {
        //            clearTimeout(this.timerToken);
        //        }
        //    }
        //    window.onload = () => {
        //        var el = document.getElementById('content');
        //        var greeter = new Greeter(el);
        //        greeter.start();
        //    };
    }
})(lifeDashApp || (lifeDashApp = {}));
//# sourceMappingURL=app.js.map