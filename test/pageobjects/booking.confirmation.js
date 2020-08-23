const Page = require("./page")

class bookingConfirmation extends Page {
    
    get lblPaymentStatus () {return $ ('//html/body/div[2]/div[1]/div[1]/div/div/div[4]/div[2]')}
    

    getlblPaymentStatus() {
        return this.lblPaymentStatus;
     }

}
module.exports = new bookingConfirmation();