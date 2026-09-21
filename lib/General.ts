//General.ts file is to provide All Re-usable functions / methods related to whole application(HRMS)
import { global } from './Global'; // Here single dot(.) means importing global class from Global.ts file from
                                   // same folder lib.
export class general extends global {
    //********************Re-usable Functions / Methods  */
//Open Application method
async openApplication(){
    await this.page.goto(this.ulr);
    console.log("Application Opened ");
}
//Login method
async login(){
await this.page.locator(this.textbox_loginname).fill(this.username);
await this.page.locator(this.textbox_password).fill(this.password);
await this.page.locator(this.button_login).click();
console.log("Login completed");
}
//Logout method
async logout(){
    await this.page.locator(this.link_logout).click();
    console.log("Logout completed");
}
//Add New Employee method
async addNewEmp() {
const frame = this.page.frameLocator(this.frame_empInfo);
await frame.locator(this.button_add).click();
await frame.locator(this.textbox_empfirstname).fill(this.empfirstname);
await frame.locator(this.textbox_emplastname).fill(this.emplastname);
await frame.locator(this.button_save).click();
console.log("New employee added");
}
// Wait method
async waitStmt() {
    await this.page.waitForTimeout(3000); // Wait for 3 seconds
    console.log("Waited for 3 seconds");
}

}
