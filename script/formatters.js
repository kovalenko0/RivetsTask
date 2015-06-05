rivets.formatters.currency = function (value){
	return "$"+value;
}

rivets.formatters.number = {
	read: function (value){
		return parseFloat(value);
	},
	publish: function (value){
		return parseFloat(value);
	}
}

rivets.formatters.positive = {
	read: function (value){
		return Math.abs(value);
	},
	publish: function (value){
		return Math.abs(value);
	}
}

rivets.formatters.integer = {
	read: function (value){
		return parseInt(value);
	},
	publish: function (value){
		return parseInt(value);
	}
}