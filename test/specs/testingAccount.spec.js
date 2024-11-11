const loginPageAction = require("../pageobjects/loginPage/loginPageAction")

var phoneno = "01682083081";
var otp = "938157";

describe("Testing Account Login journey", () => {
    it("should user input Phone and Otp", async () => {
        await loginPageAction.clickOnPhoneNumber(phoneno);
        await browser.pause(2000);
        await loginPageAction.clickOnPhoneNumberSubmit();
        
        await loginPageAction.clickOnOTP(otp);
        await browser.pause(2000);
        await loginPageAction.clickOnOTPSubmit();
        await browser.pause(2000);
        
        
    })
})