const addPurchaseAction = require("../pageobjects/AddPurchase/addPurchaseAction")


describe("Testing Account Add New Purchase From Menu journey", () => {
    it("Should Add new Purchase successfully", async () => {
        await addPurchaseAction.clickPurchaseMenuButton();
        await browser.pause(1000);      
        await addPurchaseAction.clickaddNewPurchaseButton();
        await browser.pause(1000);
        await addPurchaseAction.clickpartyDropdownButton();
        await browser.pause(1000);
        await addPurchaseAction.clickpartyFromDropdownButton();
        await browser.pause(1000);
        await addPurchaseAction.clickitemDropdownButton();
        await browser.pause(1000);
        await addPurchaseAction.clickitemFromDropdownButton();
        await browser.pause(1000);

        await addPurchaseAction.clickPurchaseSubmitButton();
        await browser.pause(3000);
        
                 
    })
})