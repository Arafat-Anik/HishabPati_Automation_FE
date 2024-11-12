const homePageAction = require("../pageobjects/homePage/homePageAction")


describe("Testing Account Add New Sale journey", () => {
    it("Should Add new Sale successfully", async () => {
        await homePageAction.clickOnSaleNowButton.click();
       // await browser.pause(2000);
        await homePageAction.clickOnPartySearchDropdown.click();
        await browser.pause(2000);
        await homePageAction.clickPartyFromDropdown.click() ;
                 
    })
})