const loginPageLocator = require ("./loginPageLocator");

class loginActions{

    async clickOnPhoneNumber(phoneno){
        await loginPageLocator.PhoneNumberField.setValue(phoneno);
    }
    async clickOnPhoneNumberSubmit(){
        await loginPageLocator.phoneSubmitButtonField.click();
    }
    async clickOnOTP(otp){
        await loginPageLocator.otpfield.setValue(otp);
    }
    async clickOnOTPSubmit(){
        await loginPageLocator.otpSubmitButtonField.click();
    }
}
module.exports = new loginActions();
