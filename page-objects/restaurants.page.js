'use strict';

var cancelButton = element( by.css( '[ng-click="clear()"]' ) );
var category     = element( by.css ( '.restoCategory' ) );
var categories   = category.all(  by.css( 'li' ) );
var restoList    = element( by.css( '.resto-list' ) );
var restoCards   = restoList.all( by.css( '[ng-include="restaurantTemplate"] .restoCard' ) );
var searchField  = element( by.css( '[ng-model="search"]' ) );

function clickCategory ( index  ) {
	categories.get( index ).click();
}

function clearSearch () {
	cancelButton.click();
}

function getRestoResults () {
	return restoCards;
}

function getSearchField () {
	return searchField;
}

module.exports = {
	'clickCategory'   : clickCategory,
	'clearSearch'     : clearSearch,
	'getRestoResults' : getRestoResults,
	'getSearchField'  : getSearchField
}
