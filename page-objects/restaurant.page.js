'use strict';

var restoName        = element( by.css( '.restaurantDetail-name') );
var menuListPizza    = element( by.css( '.menu-list > #product-list-category-169' ) );
var menuListPasta    = element( by.css( '.menu-list > #product-list-category-171' ) );
var menuListSalad    = element( by.css( '.menu-list > #product-list-category-172' ) );
var menuListMunchies = element( by.css( '.menu-list > #product-list-category-170' ) );
var pizzaList        = menuListPizza.all( by.css( '.menu-link ' ) );
var pastaList        = menuListPasta.all( by.css( '.menu-link ' ) );
var saladList        = menuListSalad.all( by.css( '.menu-link ' ) );
var munchiesList     = menuListMunchies.all( by.css( '.menu-link ' ) );
var restoMenu        = element( by.css( '.restaurantMenu' ) );
var menuCategory     = restoMenu.all( by.css ( 'li' ) );

function randomMenu () {
	return Math.floor( Math.random () * 4 );
}

function randomizeFood( length ) {
	return Math.floor( Math.random () * length );
}

function clickRandomFood () {
	var index = randomMenu();
	console.log( 'index ' + index );
	menuCategory.get( 0 ).click();
	randomFood( 0 );
}

function randomFood ( index ) {
	switch( index ) {
		case 0 : 
			pizzaList.get( randomizeFood( pizzaList.length ) ).click();
			break;
		case 1 :
			pastaList.get( randomizeFood( pastaList.length ) ).click();
			break;
		case 2 :
			saladList.get( randomizeFood( saladList.length ) ).click();
			break;
		case 3 : 
			munchiesList.get( randomizeFood( munchiesList.length ) ).click();
			break;
	}
}

function getRestoName () {
	return restoName.getText();
}

module.exports = {
	'clickRandomFood' : clickRandomFood,
	'getRestoName'    : getRestoName
}
