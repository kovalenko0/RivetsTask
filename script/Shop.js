window.onload = function () {
    window.categoriesScroll = new IScroll("#categoriesScroll", {
        scrollX: true,
        scrollY: false,
        mouseWheel: true,
        click: true
    });

    window.itemsScroll = new IScroll("#itemsScroll", {
        scrollX: true,
        scrollY: false,
        mouseWheel: true
    });	

    sightglass.root = '.';
    sightglass.adapters = rivets.adapters;

    window.shopViewModel = rivets.bind(document.querySelector('#page'), {model: new ShopViewModel(shopData)});
    window.shopViewModel = window.shopViewModel.models.model;   
    window.categoriesScroll.refresh();
}