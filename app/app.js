(function () {
	"use strict";
	var app = angular.module("productManagement",
							["common.services",
							"ui.router",
                            "ui.mask",
                            "ui.bootstrap",
                            "ngMessages",
                            'angularCharts',
                            "ngSanitize", 
							"productResourceMock"]);

	app.config(["$stateProvider", "$urlRouterProvider", 
		function($stateProvider, $urlRouterProvider){
        
        $urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "app/welcomeView.html"
			})
			//products
			.state("productList", {
                url: "/products",
                templateUrl: "app/products/productListView.html",
                controller: "ProductListCtrl as vm"
            })

            .state('productEdit',{
                // activated when the child state is activated
                abstract: true,
                url: '/products/edit/:productId',
                templateUrl: 'app/products/productEditView.html',
                controller: 'ProductEditCtrl as vm',
                resolve:{
                    productResource: 'productResource',

                    product: function(productResource, $stateParams){
                        var productId = $stateParams.productId;
                        return productResource.get({ productId: productId}).$promise;
                    }
                }
            })
            .state('productEdit.info',{
                url: '/info',
                templateUrl: 'app/products/productEditInfoView.html'
            })
            .state('productEdit.price',{
                url: '/price',
                templateUrl: 'app/products/productEditPriceView.html'
            })
            .state('productEdit.tags',{
                url: '/tags',
                templateUrl: 'app/products/productEditTagsView.html'
            })

            .state("productDetail", {
                url: "/products/:productId",
                templateUrl: "app/products/productDetailView.html",
                controller: "ProductDetailCtrl as vm",
                resolve: {
                    productResource: "productResource",
                    
                    product:function(productResource,$stateParams) {
                        var productId = $stateParams.productId;
                        return productResource.get({productId: productId}).$promise;
                    }
                }
            })

            .state('priceAnalytics', {
                url: '/priceAnalytics',
                templateUrl: 'app/prices/priceAnalyticsView.html',
                controller: 'PriceAnalyticsCtrl',
                //wait for data to return before navigating the rout and displaying the view
                resolve:{
                    productResource: 'productResource',
                    //dependency
                    products: function(productResource){
                        return productResource.query().$promise;
                    }
                }
            })

            .state('eventsApp', {
                url: '/eventsApp',
                templateUrl: 'app/events/eventsView.html',
                controller: 'EventsCtrl as vm'                
            })
            .state('eventEdit', {
                url: '/eventEdit',
                templateUrl: 'app/events/newEvent.html',
                controller: 'EventEditCtrl as vm'                
            })
            .state('profileEdit', {
                url: '/profileEdit',
                templateUrl: 'app/profiles/profileEdit.html',
                controller: 'ProfileEditCtrl as vm'                
            })

		}]
	);
}());