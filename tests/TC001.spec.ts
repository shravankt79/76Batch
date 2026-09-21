//This file to create test suite using test.describe() method and run test suite for HRMS aplication
import { test } from '@playwright/test';
import { general } from '../lib/General';

test('@Smoke_Login_Logout', async ({ page })=>{
    //test Steps
    let obj = new general(page);
    await obj.openApplication();
    await obj.login();
    await obj.logout();
    console.log("Testcase TC001 execution is completed");
 
});

