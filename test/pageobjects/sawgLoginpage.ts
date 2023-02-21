class sawgLoginpage {

  public get inputUsername() {
    return $("#user-name");
  }
  public get inputPassword() {
    return $("#password");
  }
  public get inputLogin() {
    return $("#login-button");
  }

 
  public async logInfo(userName: string, passWord: string) {
    this.inputUsername.setValue(userName);
    this.inputPassword.setValue(passWord);
    this.inputLogin.click();
    
  }
}
export default new sawgLoginpage()