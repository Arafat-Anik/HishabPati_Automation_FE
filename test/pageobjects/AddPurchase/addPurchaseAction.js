const addPurchaseLocator = require("./addPurchaseLocator")

class addPurchaseActions{
async clickPurchaseMenuButton(){
    await addPurchaseLocator.addPurchaseMenuButton.click();
}

async clickaddNewPurchaseButton(){
    await addPurchaseLocator.addNewPurchaseButton.click();

}

async clickpartyDropdownButton(){
    await addPurchaseLocator.partyDropdown.click();
}

async clickpartyFromDropdownButton(){
    await addPurchaseLocator.partyfromDropdown.click();
}

async clickitemDropdownButton(){
    await addPurchaseLocator.ItemDropdown.click();
}

async clickitemFromDropdownButton(){
    await addPurchaseLocator.ItemfromDropdown.click();
}

async clickPurchaseSubmitButton(){
    await addPurchaseLocator.PurchaseSubmit.click();
}

}
module.exports = new addPurchaseActions();