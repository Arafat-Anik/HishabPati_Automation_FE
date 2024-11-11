class loginPageLocator{
    get PhoneNumberField(){
       // return $("//input[@name='phone_number']");
      //  return $("//input[@placeholder='ফোন নম্বর (e.g. 017xxxxxxxx)']");
        return $("//input[@id='phone_number']");
    }

    get phoneSubmitButtonField(){  //Phone number for otp request
       // return $("//button[@type='submit']//span[@class='ng-star-inserted']");
        return $("//button[@type='submit']");
    }

    get otpfield(){
      //  return $("//input[@name='otp']");
        return $("//input[@id='otp']");

    }

    get otpSubmitButtonField(){         //Otp for login request
        return $("//button[@type='submit']"); 
    }

}
module.exports = new loginPageLocator();