const addSaleAction = require("../pageobjects/AddSale/addSaleAction")


describe("Testing Account Add New Sale From Menu journey", () => {
    it("Should Add new Sale successfully", async () => {
        await addSaleAction.clicksaleMenuButton();
        await browser.pause(1000);      
        await addSaleAction.clickaddnewSaleButton();
        await browser.pause(1000);
        await addSaleAction.clickpartyDropdownButton();
        await browser.pause(1000);
        await addSaleAction.clickpartyFromDropdownButton();
        await browser.pause(1000);
        await addSaleAction.clickitemDropdownButton();
        await browser.pause(1000);
        await addSaleAction.clickitemFromDropdownButton();
        await browser.pause(1000);

        await addSaleAction.clicksaleSubmitButton();
        await browser.pause(3000);
        
                 
    })
})