const Page = require("./page")

class reservationBook extends Page {
    
    get formfirstName () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[1]/div/label/span')}
    get formfirtNameData () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[1]/div/label/input')}
    
    get formlastName () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[2]/label/span')}
    get formlastNameData () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[2]/label/input')}
    
    get formEmail () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[1]/label/span')}
    get formEmailData () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[1]/label/input')}
    
    get formconfirmEmail () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[2]/label/span')}
    get formconfirmEmailData () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[2]/label/input')}
    
    get formTelephone () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[3]/div/label/span')}
    get formTelephoneData () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[3]/div/label/input')}
    
    get formAddress () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[4]/div/label/span')}
    get formAddressData () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[4]/div/label/input')}
    
    get btnConfirmBook () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[4]/button')}

    getFillBookingForm(){

        this.formfirstName.click();
        this.formfirtNameData.setValue('Jonathan');

        this.formlastName.click();
        this.formlastNameData.setValue('Gomez');

        this.formEmail.click();
        this.formEmailData.setValue('mail@testqa.com');
        
        this.formconfirmEmail.click();
        this.formconfirmEmailData.setValue('mail@testqa.com');
        

        this.formTelephone.click();
        this.formTelephoneData.setValue('5064583828');

        this.formAddress.click();
        this.formAddressData.setValue('QA Address Test')
        
    }

    submitbuttonWaiter() {

        const btnConfirmBook2 = $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[4]/button')
        btnConfirmBook2.waitForClickable({ timeout: 10000 });
    }

    getbtnBookConfirmation() {
        browser.pause(2000);
        this.btnConfirmBook.click();
    }

}
module.exports = new reservationBook();