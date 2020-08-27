const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservation.page');
const reservationResults = require('../pageobjects/reservation.results.page');
const reservationFilters = require('../pageobjects/reservation.filters');

describe('Test Case 2 - Flight Filters', () => {
    reservationFilters.openResultsFilter();
    browser.setTimeout({ 'pageLoad': 10000 });

    it('Should Validate Filter Page Results', () => {
        
        browser.setTimeout({ 'implicit': 2000 });
        expect(reservationFilters.getliFilterResults()).toHaveChildren({ gte: 5 });
        
    });

    it('Should Change Filters', () => {
        
        reservationFilters.getchbxAirlines();

    });

    it('Should Validate Flight Amount Changed', () => {
        
        expect(reservationFilters.getliFilterResults()).toHaveChildren({ eq: 1 });

    });

    it('Should Validate Only Flights For the Filter Selected', () => {
        
        reservationFilters.selectFlightResults();
        expect(reservationFilters.getlblAirlines()).toHaveText('Star Peru');
        browser.pause(2000);

    });
    
});


