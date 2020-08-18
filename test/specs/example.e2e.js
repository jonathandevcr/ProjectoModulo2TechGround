const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservation.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        reservationPage.open();

        browser.setTimeout({ 'pageLoad': 10000 });

    });
});


