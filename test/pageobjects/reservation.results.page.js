const Page = require("./page")

class reservationResults extends Page {
    
    get liFlightResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul')}

    get sltFlightResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[1]/div[1]')}
    get lblFromResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[3]/div[1]/p')}
    get lblToResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[3]/div[3]/p[1]')}
    

   getliFlightResults(){

    return this.liFlightResults;
}
    
    selectFlightResults(){

        this.sltFlightResults.click();
        browser.pause(1000);
    }

    getlblFromResults() {
        return this.lblFromResults;
 }

     getlblToResults() {
        return this.lblToResults;
    }

}
module.exports = new reservationResults();
