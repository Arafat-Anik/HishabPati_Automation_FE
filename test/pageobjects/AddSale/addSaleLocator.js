class addSaleLocator {
    
get addsaleMenuButton(){
return $("//i[@class='hishabpati-icon-sales-bag']");
}

get addNewsaleButton(){
return $("//span[@class='d-lg-inline-block']");
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
get saleSubmit(){
    return $("//button[contains(text(),'সেভ করুন')]");
    
}
}
module.exports = new addSaleLocator();