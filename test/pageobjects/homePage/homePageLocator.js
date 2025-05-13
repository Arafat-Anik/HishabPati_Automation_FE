class homePageLocator{
    get addsaleButton(){
        return $("//a[contains(@class,'nav-link add-sale-blue')]");
       // return $("//a[contains(text(),'বিক্রি করুন')]");
    }
    get partyDropdown(){
        return $("//div[contains(@class,'custom-ngx-typeahead-dropdown')]");
       
    }
    get partyfromDropdown(){
        return $("//div[normalize-space()='ABC']");
       
    }
    get ItemDropdown(){
        return $("//input[@placeholder='পণ্য অনুসন্ধান']");
       
    }
    get ItemfromDropdown(){
        return $("//div[normalize-space()='Apple']");
       
    }
    get clicksubmitsale(){
        return $("//button[contains(text(),'সেভ করুন')]");
       
    }


}
module.exports = new homePageLocator();