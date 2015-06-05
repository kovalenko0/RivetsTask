function ShopItem(data){
	var that = this;
	that.name = data.name;
	that.picturePath = data.picturePath;
	that.price = data.price;
	that.amount = 0;
	var amountWasChanged = false;
	that.sum = 0;
	sightglass(that, "amount", function () {
		if (!amountWasChanged){
			window.shopViewModel.addToBasket(that);	
		}
		that.sum = that.price * that.amount;
		window.shopViewModel.calculateSum();
	});

	that.decrementAmount = function () {
		if (that.amount > 0){ 
			that.amount--;
		}
	}

	that.incrementAmount = function () {
		that.amount++;
	}

	that.removeFromBasket = function () {
		window.shopViewModel.removeFromBasket(that);
	}
}