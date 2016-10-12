'use strict';

var EC              = protractor.ExpectedConditions;
var homePage        = require( './page-objects/home.page.js' );
var restaurantsPage = require( './page-objects/restaurants.page.js' );
var restaurantPage  = require( './page-objects/restaurant.page.js' );

describe( 'Search Citin location', function () {
	beforeAll( function () {
		homePage.navigate();
		browser.waitForAngular();
	} );

	it( 'should enter Citin in search field', function () {
		homePage.enterSearchParams( 'Citin' );
		browser.wait( EC.visibilityOf( homePage.getSearchResultsContainer() ), 5000 );
		expect( homePage.getSearchParams() ).toEqual( 'Citin' );
	} );

	it( 'should click the first item in search results', function () {
		homePage.getSearchResults().get( 0 ).click();
		browser.wait( EC.visibilityOf( homePage.getLocationModal() ), 5000 );
		homePage.clickShowRestaurantButton();
		expect( browser.getCurrentUrl() ).toEqual( 'https://beta.ginja.co.th/en/bangkok/restaurants' );
	} );

	it( 'should click Chinese category', function () {
		restaurantsPage.clickCategory( 5 );
	} );

	it( 'should verify available restaurants are chinese', function () {
		restaurantsPage.getRestoResults().map( function ( resto, index ) {
			expect( resto.element( by.css( '.restoCard-vendorDetails>p' ) ).getText() ).toEqual( 'Chinese' );
		} );
	} );

	it( 'should clear search', function () {
		restaurantsPage.clearSearch();
		expect( restaurantsPage.getSearchField().getText() ).toEqual( '' );
	} );

	it( 'should click 4th open restaurant', function () {
		var restoName = restaurantsPage.getRestoResults().get( 3 ).element( by.css( '.restoCard-vendorDetails>h3' ) ).getText();
		restaurantsPage.getRestoResults().get( 3 ).click();
		expect( restoName ).toEqual( restaurantPage.getRestoName() );
	} );

	it( 'should click any 3 foods with varying amounts', function () {
		browser.get( 'https://beta.ginja.co.th/en/bangkok/khlong-toei-101/italian-pizza-10/pizza-mania-40#/' );
		restaurantPage.clickRandomFood();
	} );
} );
