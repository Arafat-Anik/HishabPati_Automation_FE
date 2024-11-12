class homePageLocator{
    get addsaleButton(){
        return $("//a[contains(@class,'nav-link add-sale-blue')]");
       // return $("//a[contains(text(),'বিক্রি করুন')]");
    }
    get partyDropdown(){
        return $("//div[contains(@class,'custom-ngx-typeahead-dropdown')]");
       
    }
    get partyfromDropdown(){
        return $("//div[contains(@class,'custom-ngx-typeahead-dropdown')]//div[@class='word-break']");
       
    }

}
module.exports = new homePageLocator();