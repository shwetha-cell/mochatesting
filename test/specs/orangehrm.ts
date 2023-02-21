describe("login to the website",()=>{

    it("Validate Login Page",async()=>{
        await browser.url("https://opensource-demo.orangehrmlive.com")
        await expect(browser.getTitle()).toEqual('OrangeHRM')
        const UserNameText = $('//input[@name="username"]');
        const PasswordText =  $('//input[@name="password"]');
        const Login = $('//button[@type="submit"]');

     await   UserNameText.setValue("Admin");
      await  PasswordText.setValue("admin123");
      await  Login.click();

       const product = await $('//h5[@class="oxd-text oxd-text--h5 orangehrm-login-title"]');
       expect(product).toBeDisabled()
    })
})