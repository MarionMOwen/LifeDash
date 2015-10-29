module lifeDashApp.headerTime {
    "use strict";

    interface IDateTimeViewModule {
        dateVal: string;
        timeVal: string;
        updateTime(): void;
        
    };

    class HeaderTimeViewController implements IDateTimeViewModule {
        dateVal: string;
        timeVal: string;
        
        constructor(private $scope: ng.IScope,
                    private $interval: ng.IIntervalService) {

            
            //Set the intial time/date
            var currentDate = new Date().toDateString();
            var currentTime = new Date().toLocaleTimeString();
            this.dateVal = currentDate; 
            //this.timeVal = currentTime;           
            $interval(this.updateTime, 1000);
        }      

       
        updateTime() {            
            console.log("interval happend");  

            //cant use "this" keyword becuase it is not referencing the correct property.     
            HeaderTimeViewController.prototype.timeVal = new Date().toLocaleTimeString();           
        }
    }

    angular.module("lifeDashApp")
        .controller("HeaderTimeViewController", HeaderTimeViewController);


    //class CreateTime {
    //    element: HTMLElement;
    //    span: HTMLElement;
    //    timerToken: number;

    //    constructor(element: HTMLElement) {
    //        this.element = element;
    //        this.element.innerHTML += "The time is: ";
    //        this.span = document.createElement('span');
    //        this.element.appendChild(this.span);
    //        this.span.innerText = new Date().toUTCString();
    //    }

    //    start() {
    //        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    //    }

    //    stop() {
    //        clearTimeout(this.timerToken);
    //    }

    //}

//    window.onload = () => {
//        var el = document.getElementById('time-wrapper');
//        var greeter = new CreateTime(el);
//        greeter.start();
//    };

//    angular.module("lifeDashApp")
//        .controller("CreateTime", CreateTime);
}
 