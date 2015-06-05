function ShopViewModel(data){
    var that = this;
    that.categories = [];
    that.itemsInBasket = [];

    var previousPage;
    var currentPage = "categories";
    that.setCurrentPage = function (page){  //TODO: find better solution for this
    	previousPage = currentPage;
    	switch (page){
    		case "items":{
		        that.currentPageIsCategories = false;
		        that.currentPageIsItems = true;
		        that.currentPageIsBasket = false;
                currentPage = "items";
		        window.itemsScroll.refresh();     	
		        break;		
    		}
    		case "basket":{
		        that.currentPageIsCategories = false;
		        that.currentPageIsItems = false;
		        that.currentPageIsBasket = true;        	
                currentPage = "basket";
		        break;		
    		}
    		default:{
		        that.currentPageIsCategories = true;
		        that.currentPageIsItems = false;
		        that.currentPageIsBasket = false;  
                currentPage = "categories";
		        window.categoriesScroll.refresh();      	
		        break;		
    		}
    	}
    }
	that.navigateBack = function () {
		that.setCurrentPage(previousPage);
	}   
    that.navigateToBasket = function () {
        that.setCurrentPage("basket");
    } 
    that.navigateToCategories = function () {
        that.setCurrentPage("categories");
    }     
    that.setCurrentPage();
    
	processData(data);

    that.currentCategory = that.categories[0]; //reference to category shown on "items" page

    that.removeFromBasket = function (item) {
    	var index = that.itemsInBasket.indexOf(item);
    	if (index > -1){
    		item.amount = 0;
    		that.itemsInBasket.splice(index, 1);
    	}
    	that.calculateSum();
    }


    that.addToBasket = function (item) {
    	if (that.itemsInBasket.indexOf(item) < 0){
    		that.itemsInBasket.push(item);
    	}
    	that.calculateSum();
    }

    that.sum = 0;

    that.calculateSum = function () {
    	var sum = 0;
    	for (var i = 0; i < that.itemsInBasket.length; i++){
    		var item = that.itemsInBasket[i];
    		sum += item.sum;
    	}
    	that.sum = sum;
    }

    that.clearAll = function () {
    	while (that.itemsInBasket.length){
    		that.itemsInBasket[0].removeFromBasket();
    	}
    }

    that.buy = function () {
    	var total = that.sum;
    	for (var i = 0; i < that.itemsInBasket.length; i++){
    		var item = that.itemsInBasket[i];
    		console.log (item.name + " " + item.price + " " + " x " + that.itemsInBasket[i].amount + " = $" + item.sum);
    	}
    	console.log("Total:    $" + total);
    	that.clearAll();
    }

    function processData(d){
    	for (var category in d){
    		that.categories.push(new ShopCategory(d[category]));
    	}
    }
}