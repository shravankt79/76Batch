// This Gloable.ts file is To Provide Test Data & objects / elements related to whole application(HRMS)
import { Page } from '@playwright/test';

export class global {
    constructor(public page : Page){
        
    }
//******Test Data for Application ******************/
public ulr : string = "https://sureshitacademy.in/hrms/login.php";
public username : string = "sureshit";
public password : string = "sureshit";
public empfirstname : string = "hyderabad";
public emplastname : string = "SureshIT";


//******Objects / Elements of Application *********/
public textbox_loginname : string = "//input[@name='txtUserName']";
public textbox_password : string = "//input[@name='txtPassword']";
public button_login : string = "//input[@name='Submit']";
public link_logout  : string = "//a[text()='Logout']";
public frame_empInfo : string = "//iframe[@id='rightMenu']";
public button_add : string = "//input[@value='Add']";
public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
public textbox_emplastname : string = "//input[@name='txtEmpLastName']";
public button_save : string = "//input[@value='Save']";


}
