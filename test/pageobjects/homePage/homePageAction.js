const homePageLocator = require ("./homePageLocator");

class homePageAction{

    async clickOnSaleNowButton(){
        await homePageLocator.addsaleButton.click();
    }
    async clickOnPartySearchDropdown(){
        await homePageLocator.partyDropdown.click();
    }
    async clickPartyFromDropdown(){
        await homePageLocator.partyfromDropdown.click();
    }

   

}

module.exports = new homePageAction();