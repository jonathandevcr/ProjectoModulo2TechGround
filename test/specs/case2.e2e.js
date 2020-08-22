const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservation.page');
const reservationResults = require('../pageobjects/reservation.results.page');
const reservationFilters = require('../pageobjects/reservation.filters');

describe('Test Case 2 - Flight Filters', () => {
    reservationFilters.openResultsFilter();
    browser.setTimeout({ 'pageLoad': 10000 });

    it('Should Validate Filter Page Results', () => {
        
        browser.setTimeout({ 'implicit': 10000 });
        expect(reservationFilters.getlblFilterResults()).toHaveTextContaining('Total listings found');
        
    });

    it('Should Change Filters', () => {
        
        reservationFilters.getchbxAirlines();

    });

    it('Should validate flight amount changed', () => {
        
     //   reservationFilters.getchbxAirlines();
     //   browser.pause(5000);

    });

    it('Should validate only Flights for the filter selected', () => {
        
        reservationFilters.selectFlightResults();
        expect(reservationFilters.getlblAirlines()).toHaveText('Moldavian Airlines');
        browser.pause(2000);

    });
    
});


