module lifeDashApp.adminView {

    interface IAdminViewModule {
        sampleInput: string;
        sampleInput1: string;
        greet(): void;
    };

    class AdminViewController implements IAdminViewModule {
        sampleInput: string;
        sampleInput1: string;

        $inject = ["$scope"];
        constructor() {
            this.sampleInput = "blank scope";
        }

        //This is called on an OnClick function from the adminView page. 
        greet() : void {
            console.log("Hello, world. ");            
            this.sampleInput = "Helping the scope";            
        }

        clear(): void {
            //this.sampleInput.$setPristine();
        }
    }

    angular.module("lifeDashApp")
        .controller("AdminViewController", AdminViewController);
} 

/* Example Controller
 interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductListControl implements IProductListModel {

        //Need to add properties defined in the 'interface'.
        //They need to match because we are implementing them.
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = []

            var productResource = dataAccessService.getProductResource();
            productResource.query((data: app.domain.IProduct[]) => {
                this.products = data;
            });            
        }

        //Function decleration matches the Interface promise
        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }

    angular.module("productManagement")
        .controller("ProductListController", ProductListControl);
}
 */