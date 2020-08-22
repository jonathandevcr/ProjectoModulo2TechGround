const Page = require("./page")

class reservationFilters extends Page {
    
    get lblFilterResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/div/div[1]/p')}
    get chbxAirlines1 () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[1]/aside/div[1]/div/div/form/div[3]/div[2]/div[1]/div/label/img')}
    get sltFlightResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[1]/div[1]')}
    get lblAirlines () {return $ ('/html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/ul')}
    
    openResultsFilter (path) {
        browser.maximizeWindow();
        return browser.url(`https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/2020-10-01/2/1/1${path}`)
    }

    getlblFilterResults() {
        return this.lblFilterResults;
    }

    getchbxAirlines() {
        this.chbxAirlines1.click();
        browser.pause(1000);
    }
    
    selectFlightResults(){

        this.sltFlightResults.click();
        browser.pause(1000);
    }

    getlblAirlines() {
        return this.lblAirlines;
     }

}
module.exports = new reservationFilters();