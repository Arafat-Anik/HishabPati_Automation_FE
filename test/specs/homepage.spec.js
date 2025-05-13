const homePageAction = require("../pageobjects/homePage/homePageAction")


describe("Testing Account HomePage journey", () => {
    it("Should Add new Sale successfully", async () => {
        await homePageAction.clickOnSaleNowButton();
        await browser.pause(1000);      
        await homePageAction.clickOnPartySearchDropdown();
        await browser.pause(1000);
        await homePageAction.clickPartyFromDropdown();
        await browser.pause(1000);
        await homePageAction.clickItemsearchDropdown();
        await browser.pause(1000);
        await homePageAction.clickItemFromDropdown();
        await browser.pause(1000);

        await homePageAction.clicksubmitsalebutton();
        await browser.pause(3000);
        
                 
    })
})