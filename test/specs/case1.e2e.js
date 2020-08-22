const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservation.page');
const reservationResults = require('../pageobjects/reservation.results.page');

describe('Test Case 1 - Flight selection', () => {
    it('Should search a Flight', () => {
        reservationPage.open();
        browser.setTimeout({ 'pageLoad': 10000 });

        reservationPage.selectFlightsOption();
        reservationPage.addFlyFrom('SJO');
        reservationPage.addFlyTo('TXL');
        reservationPage.selectDepart();
        reservationPage.addAdults();
        reservationPage.addChilds();
        reservationPage.addInfants();
        reservationPage.selectSearchFly();
    });

    it('Should validate URL', () => {
        browser.setTimeout({ 'implicit': 10000 });
        expect(browser).toHaveUrl('https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/2020-09-23/3/2/1');
    });

    it('Should validate there are Available Flights', () => {
        
        browser.setTimeout({ 'implicit': 10000 });
        expect(reservationResults.getlblFlightResults()).toHaveTextContaining('Total listings found')
    });

    it('Should validate the Flight points (From-To)', () => {
        browser.setTimeout({ 'implicit': 10000 });
        reservationResults.selectFlightResults();
        expect(reservationResults.getlblFromResults()).toHaveText('SJO');
        expect(reservationResults.getlblToResults()).toHaveText('TXL');

    });    
});


