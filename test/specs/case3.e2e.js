
const reservationSelectBook = require('../pageobjects/reservation.selectbook');
const reservationBook = require('../pageobjects/reservation.book');
const bookingConfirmation = require ('../pageobjects/booking.confirmation')


describe('Test Case 3 - Select Flight and Book a Flight', () => {
        reservationSelectBook.openBookPage();
        browser.setTimeout({ 'pageLoad': 5000 });
    
    it('Should click the Book button', () => {
        
        browser.setTimeout({ 'implicit': 10000 });
        reservationSelectBook.getbtnBookFlight();

    });

    it('Should Book a Flight', () => {

        browser.setTimeout({ 'implicit': 5000 });
        
        reservationBook.getFillBookingForm();
        reservationBook.submitbuttonWaiter();
        browser.pause(2000);
        reservationBook.getbtnBookConfirmation();

    });

    it('Should validate pending payment', () => {
        
        expect(bookingConfirmation.getlblPaymentStatus()).toHaveText('Your booking status is Unpaid');
    });

    it('Should Validate URL', () => {

        expect(browser).toHaveUrlContaining('https://www.phptravels.net/invoice?id');
    });

});


