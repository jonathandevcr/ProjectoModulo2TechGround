const Page = require("./page")


class reservationPage extends Page {
    //Button Flights 
    get btnFlights () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/nav/ul/li[2]/a')}
    
    //Navigation through Fly From 
    get sltFlyFrom () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[1]/div/div[1]/div/div[2]/div/a')} 
    get inputFlyFrom () {return $('//html/body/div[6]/div/input')}
    get sltDpFrlyFrom () {return $('//html/body/div[6]/ul/li[1]/div')}

    //Navigation through Fly To 
    get sltFlyTo () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[1]/div/div[2]/div/div[2]/div')}
    get inputFlyTo () {return $('//html/body/div[7]/div/input')} 
    get sltDpFlyTo () {return $('//html/body/div[7]/ul/li/div')} 

    //Navigation Depart
    get sltDepart () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[2]/div/div/div[1]/div/div[2]/input')}
    get btnNextMonth () {return $('//html/body/div[3]/div[9]/nav/div[3]')}
    get btnDay()  {return $('//html/body/div[3]/div[9]/div/div/div[2]/div[25]')}; 
    
    //Members Selection
    get btnAdults () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[1]/div/div[2]/div/span/button[1]')}
    get btnChilds () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[2]/div/div[2]/div/span/button[1]')}
    get btnInfants () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[3]/div/div[2]/div/span/button[1]')}
   
    get btnSearchFly () {return $('//*[@id="flights"]/div/div/form/div/div/div[3]/div[4]/button')}

    //Button Flights 
    getbtnFlights () {return this.btnFlights}

    //Navigation through Fly From 
    getsltFlyFrom () {return this.sltFlyFrom}
    getinputFlyFrom () {return this.inputFlyFrom}
    getsltDpFrlyFrom () {return this.sltDpFrlyFrom}

    //Navigation through Fly To
    getsltFlyTo () {return this.sltFlyTo}
    getinputFlyTo () {return this.inputFlyTo}
    getsltDpFlyTo () {return this.sltDpFlyTo}

    //Navigation Depart
    getsltDepart () {return this.sltDepart}    
    getbtnNextMonth () {return this.btnNextMonth}
    getbtnDay () {return this.btnDay}
    
    //Members Selection
    getbtnAdults () {return this.btnAdults}
    getbtnChilds () {return this.btnChilds}
    getbtnInfants () {return this.btnInfants}

    getbtnSearchFly () {return this.btnSearchFly}

    open () {
        return super.open('');
    
    }

    addFlyFrom(flyFromValue) {
        this.sltFlyFrom.click();
        this.inputFlyFrom.setValue(flyFromValue);
        this.sltDpFrlyFrom.click(); 
        browser.pause(2000);

    }

    addFlyTo(flyToValue) {
        this.sltFlyTo.click();
        this.inputFlyTo.setValue(flyToValue);
        this.sltDpFlyTo.click(); 
        browser.pause(2000);
    }

        //reservationPage.getinputFlyFrom().setValue('SJO');
      //  reservationPage.getsltDpFrlyFrom().click();
    

}

module.exports = new reservationPage();

