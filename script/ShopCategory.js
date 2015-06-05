function ShopCategory(data){
	var that = this;
	that.name = data.name;
	that.picturePath = "";
	that.items = [];

	for (var item in data.items){
		that.items.push( new ShopItem(data.items[item]) );
	}

	that.picturePath = that.items[0].picturePath;

	that.browseItems = function () {
		window.shopViewModel.currentCategory = that;
		window.shopViewModel.setCurrentPage("items");
	}
}
