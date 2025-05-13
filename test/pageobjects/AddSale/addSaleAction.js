const addSaleLocator = require ("./addSaleLocator");

class addSaleActions{
async clicksaleMenuButton(){
    await addSaleLocator.addsaleMenuButton.click();
}

async clickaddnewSaleButton(){
    await addSaleLocator.addNewsaleButton.click();
}

async clickpartyDropdownButton(){
    await addSaleLocator.partyDropdown.click();
}

async clickpartyFromDropdownButton(){
    await addSaleLocator.partyfromDropdown.click();
}

async clickitemDropdownButton(){
    await addSaleLocator.ItemDropdown.click();
}

async clickitemFromDropdownButton(){
    await addSaleLocator.ItemfromDropdown.click();
}

async clicksaleSubmitButton(){
    await addSaleLocator.saleSubmit.click();
}

}
module.exports= new addSaleActions();