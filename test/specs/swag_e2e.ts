import sawgLoginpage from "../pageobjects/sawgLoginpage.js";
import swagProduct_Add from "../pageobjects/swagProduct_Add.js";


describe("login to the website ",()=>{
    it("Validate Login Page",async()=>{
    
        await browser.url("https://www.saucedemo.com/")
        await browser.maximizeWindow()

await sawgLoginpage.logInfo('standard_user','secret_sauce');
 
})
it("validate the products",async ()=> {
    

await swagProduct_Add.addCart();


})

})

