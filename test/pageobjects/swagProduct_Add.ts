import sawgLoginpage from "./sawgLoginpage"

class swagProduct_Add {

  
 public   get Product1(){
        return $('//button[@id="add-to-cart-sauce-labs-backpack"]')
    
    }

  public  get Product2(){
        return $('#add-to-cart-sauce-labs-bike-light')
    }
 
public addCart(){
    this.Product1.click()

    this.Product2.click()
}
}


export default new swagProduct_Add()