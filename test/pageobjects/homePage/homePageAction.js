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
    async clickItemsearchDropdown(){
        await homePageLocator.ItemDropdown.click();
    }
    async clickItemFromDropdown(){
        await homePageLocator.ItemfromDropdown.click();
    }
    async clicksubmitsalebutton(){
        await homePageLocator.clicksubmitsale.click();
    }

   

}

module.exports = new homePageAction();