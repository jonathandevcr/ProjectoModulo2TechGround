const Page = require("./page")


class reservationPage extends Page {

    get inputFlights () {return $('//*[@id="search"]/div/div/div/div/div/nav/ul/li[2]/a')}
    get inputFlyFrom () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[1]/div/div[1]/div/div[2]/div')} 
    get inputFlyTo () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[1]/div/div[2]/div/div[2]/div')} 
    get inputDepart () {return $('//*[@id="FlightsDateStart"]')}
    get btnNextMonth () {return $('//*[@id="datepickers-container"]/div[9]/nav/div[3]')}
    get btnDay()  {return $('.datepicker--cell datepicker--cell-day').$('div=16')}; 
    get btnAdults () {return $('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[1]/div/div[2]/div/span/button[1]')}
    get btnChilds () {return $('/html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[2]/div/div[2]/div/span/button[1]')}
    get btnInfants () {return $('/html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[3]/div/div[2]/div/span/button[1]')}
    get btnSearchFly () {return $('//*[@id="flights"]/div/div/form/div/div/div[3]/div[4]/button')}

    //get btnCalendarDay () {return $('//*[@id="FlightsDateStart"]')}

    getinputFlights () {return this.inputFlights}
    getinputFlyFrom () {return this.inputFlyFrom}
    getinputFlyTo () {return this.inputFlyTo}
    getinputDepart () {return this.inputDepart}
    getbtnNextMonth () {return this.btnNextMonth}
    getbtnDay () {return this.btnDay}
    getbtnAdults () {return this.btnAdults}
    getbtnChilds () {return this.btnChilds}
    getbtnInfants () {return this.btnInfants}
    getbtnSearchFly () {return this.btnSearchFly}

    open () {
        return super.open('');
    }

}



module.exports = new reservationPage();