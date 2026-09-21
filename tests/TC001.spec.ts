//This file to create test suite using test.describe() method and run test suite for HRMS aplication
import { test } from '@playwright/test';
import { general } from '../lib/General';

test('@Smoke_Login_Logout', async ({ page })=>{
    //test Steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
<<<<<<< HEAD
    console.log("Login and Logout test completed successfully");
=======
    console.log("Testcase TC001 execution is completed");
>>>>>>> af1e3311f5c787a81ce73f83b94d4351bba58957
});

