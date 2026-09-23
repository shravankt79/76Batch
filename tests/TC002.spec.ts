//TC002 is to Provide Actual automation test script to Add Employee in HRMS aplication
import { test } from '@playwright/test';
import { general } from '../lib/General'; //Here double dots(..) means importing general class from General.ts file
                                          //from another folder lib. if there are three dots(...) then it means 
                                          //importing from another folder which is outside of the project folder.

test('@Regression_AddNewEmployee',async({page})=>{
   //--Test Steps
   let obj = new general(page);
   await obj.openApplication();
   await obj.waitStmt();
   await obj.login();
   await obj.waitStmt();
   await obj.addNewEmp();
   await obj.waitStmt();
   await obj.logout();
   await obj.waitStmt();
   console.log("Add new employee is done -Edited in VScode");
});