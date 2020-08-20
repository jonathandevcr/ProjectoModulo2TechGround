const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservation.page');

describe('Reservation Page Details', () => {
    it('Should search a Flight ', () => {
        reservationPage.open();
        browser.setTimeout({ 'pageLoad': 10000 });

        reservationPage.getbtnFlights().click();
        browser.pause(5000);
        
        reservationPage.addFlyFrom('SJO');
        reservationPage.addFlyTo('TXL');

        reservationPage.getsltDepart().click();
        reservationPage.getbtnNextMonth().click();
        reservationPage.getbtnDay().click();
        browser.pause(2000);

        for (var i = 0; i < 2; i++) {
            reservationPage.getbtnAdults().click();
         }
         browser.pause(2000);

        for (var y = 0; y < 2; y++) {
            reservationPage.getbtnChilds().click();
         }
         browser.pause(2000);

         reservationPage.getbtnInfants().click();
         browser.pause(5000);

         reservationPage.getbtnSearchFly().click();
         browser.setTimeout({ 'pageLoad': 10000 });

    });
});


