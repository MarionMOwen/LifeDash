module lifeDashApp {
    //Create TypeScript module namespace essentially.
    //Create the angular module within TypeScript. this gives it the IIFE
    var main = angular.module("lifeDashApp", ["ngRoute"]); //This is for temp HTTP resource mocking. remove
    //this if we want to use a different service.
    main.config(routeConfig);

    main.controller("HeaderViewController", []);


    routeConfig.$inject = ["$routeProvider"]; //Specifies the route prerameter. Ensures this works propertly even after minification.
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {
        $routeProvider
            .when("/dashboard",
                {
                    templateUrl: "app/views/dashView.html",
                    //controller: "CreateTime as vm"
                })       
            .when("/admin",
                {
                    templateUrl: "app/views/adminView.html",
                    controller: "AdminViewController as av"
                })            
            .otherwise("/dashboard");
    }
}








