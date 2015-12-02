module lifeDashApp.headerTime {
    "use strict";

    interface IDateTimeViewModule {
        dateVal: string;
        timeVal: string;
        gCalVal: HTMLElement;
        updateTime(): void;
        updatePage(): void;
        
    };

    class HeaderTimeViewController implements IDateTimeViewModule {
        dateVal: string;
        timeVal: string;
        gCalVal: HTMLElement;
        
        constructor(private $scope: ng.IScope,
            private $interval: ng.IIntervalService,
        private $element: JQuery) {
            
            //Set the intial time/date
            var currentDate = new Date().toDateString();
            var currentTime = new Date().toLocaleTimeString();
            this.dateVal = currentDate;            
            $interval(this.updateTime, 1000);
            $interval(this.updatePage, 2000);

            //Set the intial GCalendar value
            this.gCalVal.innerHTML = '<iframe src="https://calendar.google.com/calendar/embed?src=fh5ffl98sggulureu4ce22gc5g@group.calendar.google.com&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF" style= "border: 0" width= "800" height= "600" frameborder= "0" scrolling= "no" > </iframe>';
            
        }      

       
        updateTime() {         
            //cant use "this" keyword becuase it is not referencing the correct property.     
            HeaderTimeViewController.prototype.timeVal = new Date().toLocaleTimeString();           
        }

        updatePage() {
            console.log("Page reload 1");  
           // window.top.location.reload();
            var gVal = '<iframe src="https://calendar.google.com/calendar/embed?src=fh5ffl98sggulureu4ce22gc5g@group.calendar.google.com&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF" style= "border: 0" width= "800" height= "600" frameborder= "0" scrolling= "no" > </iframe>';
            //var test = HeaderTimeViewController.prototype.gCalVal.getElementsByClassName('googleCalendar');
            //test.innerHTML = "<div>test</div>"
            $(".googleCalendar").html(gVal);
        
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
 