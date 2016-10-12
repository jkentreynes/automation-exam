'use strict';

var locationModal          = element( by.css( '.modal-content' ) );
var searchField            = element( by.css ( '[ng-autocomplete]' ) );
var searchResultsContainer = element( by.css ( '.pac-container' ) ); 
var searchResults          = searchResultsContainer.all( by.css( '.pac-item' ) );
var showRestaurantsButton  = element.all( by.css ( '[ ng-click="submit()" ]') );

function navigate () {
	browser.get( 'https://beta.ginja.co.th/' );
}

function enterSearchParams ( params ) {
	searchField.clear().sendKeys( params );
}

function clickShowRestaurantButton () {
	showRestaurantsButton.get( 1 ).click();
}

function getSearchParams () {
	return searchField.getAttribute( 'value' );
}

function getSearchResultsContainer () {
	return searchResultsContainer;
}

function getSearchResults () {
	return searchResults;
}

function getLocationModal () {
	return locationModal;
}

module.exports = {
	'navigate'                  : navigate,
	'enterSearchParams'         : enterSearchParams,
	'clickShowRestaurantButton' : clickShowRestaurantButton,
	'getSearchParams'           : getSearchParams,
	'getSearchResultsContainer' : getSearchResultsContainer,
	'getSearchResults'          : getSearchResults,
	'getLocationModal'          : getLocationModal
}
