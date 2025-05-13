class addPurchaseLocator{

    get addPurchaseMenuButton(){
        return $("//i[@class='hishabpati-icon-purchases-2']");
    }

    get addNewPurchaseButton(){
        return $("//span[@class='d-lg-inline-block']");
    }

    get partyDropdown(){
    return $("//div[contains(@class,'custom-ngx-typeahead-dropdown')]");

    }
    get partyfromDropdown(){
    return $("//div[normalize-space()='DEF']");

    }
    get ItemDropdown(){
    return $("//input[@placeholder='পণ্য অনুসন্ধান']");

    }
    get ItemfromDropdown(){
    return $("//div[normalize-space()='Apple']");

    }
    get PurchaseSubmit(){
    return $("//button[contains(text(),'সেভ করুন')]");

    }


}
module.exports = new addPurchaseLocator();