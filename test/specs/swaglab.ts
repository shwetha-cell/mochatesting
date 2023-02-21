//import { it } from "mocha"

describe("login to the website ",()=>{

    it("Validate Login Page",async()=>{
        await browser.url("https://www.saucedemo.com/")
        await browser.maximizeWindow()
        const UserNameText =  $('#user-name')
        const PasswordText =  await $('#password')
        const Login = $('#login-button')
        const logo =$('.app_logo')
        await   UserNameText.setValue("standard_user")
        await  PasswordText.setValue("secret_sauce")
        await Login.click()

       await expect(logo).toBeDisplayed()
    })
//it("Adding product to cart",async()=>{
  //  const addCart1 =$("#add-to-cart-sauce-labs-backpack")
    //const addCart2 =$("#add-to-cart-sauce-labs-bike-light")
    //await addCart1.click()
    //browser.pause(5000)
    //await addCart2.click()
   //await browser.pause(3000)

//})

//it("Add to cart validate" ,async()=>{

  // const Cart=$('//a[@class="shopping_cart_link"]')

    //await Cart.click()
   
//})

//it ("Validate the products name",async()=>{
   // const backPack1=$('#item_4_title_link')
   // const backPack2 =$('#item_0_title_link')
   // await expect(backPack1).toBeDisplayed()
  //  await expect(backPack2).toBeDisplayed()
 // const Name= await backPack1.getText()
   // console.log("backpack name:::::",Name)
 // expect(Name).toHaveText('Sauce Labs Backpack')
    
//})
it('multiple element finding', async() => {
    
    const addToCartElements = await $$("//button[text()='Add to cart']")

    let sizeofAddToCart = await addToCartElements.length

    console.log("size of the cart",sizeofAddToCart)



  browser.waitUntil(async ()=> await addToCartElements.length>0,{timeout:8000,timeoutMsg:"Element length not greater than zero"})

    await browser.pause(5000)
for (let index = 0; index < sizeofAddToCart; index++) {

    const element = await addToCartElements[index];

    await element.waitForClickable();

    await browser.pause(5000)
    await element.click()}


    // checking the count of cart 

    const addToCart = await $(".shopping_cart_badge")
    const addToCartelement = await addToCart.getText()
console.log("no of items",addToCartelement)
    console.log("addto cart element",sizeofAddToCart.toString())
    browser.waitUntil(async ()=> await addToCartelement==sizeofAddToCart.toString(),{timeout:8000,timeoutMsg:"Element is equal to six "})
await expect(addToCartelement).toEqual(sizeofAddToCart.toString())

});
});


