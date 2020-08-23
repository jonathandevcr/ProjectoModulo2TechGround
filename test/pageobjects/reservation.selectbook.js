const Page = require("./page")

class reservationSelectBook extends Page {
    
    get btnBookFlight () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[1]/div[2]/form/div[2]/div/button')}
    
    openBookPage (path) {
        browser.maximizeWindow();
        return browser.url(`https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/2020-10-01/2/1/1${path}`)
    }

    getbtnBookFlight() {
        this.btnBookFlight.click();
     }

}
module.exports = new reservationSelectBook();