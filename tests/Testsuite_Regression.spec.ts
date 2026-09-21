import {test} from "@playwright/test";
import {general} from "../lib/General";   
test.describe('Regression suite', () => { //test describe is a test suite
    //test steps
    test('TC001_Login_Logout', async ({ page })=>{
        //test Steps
        let obj = new general(page);
        await obj.openApplication();
        await obj.login();
        await obj.logout();
    });
    test('TC002_AddNewEmployee', async ({ page })=>{
        //test Steps
        let obj = new general(page);
        await obj.openApplication();
        await obj.login();
        await obj.addNewEmp();
        await obj.logout();
    });
});