import {ZohoDeskPortalSDK} from '@zohocorp/zohodesk-portal-apikit';
import {ZDCustomizedTicketField, ZDCustomizedTicketForm, ZDVisibleTicketField} from '@zohocorp/zohodesk-portal-ticket/src/Components/ZDPortalSubmitTicketWrapper'
//In this File we, provided the APIs functions

//To fetch layouts and their details 
function getLayouts(){
    ZohoDeskPortalSDK.getLayouts({
        'departmentId': 'your_deparment_id',//To pass your department id
        'limit': '1'
        },(message) => {
        console.log("Success:", message);
    },(error) => {
        console.log("Error:", error);
    })
}

//To get the most popular topics in the specific categories
function getpMostopularTopics(){
    ZohoDeskPortalSDK.getMostPopularTopics({
        "categoryId": "your_cateogory_id" // To pass your category id 
      },
    (message) => {
            console.log("Success:", message);   
    },(error) => {
          console.log("Error:", error);
    })
}

//To get the products of the specific department 
function getProducts(params){
      ZohoDeskPortalSDK.getProducts("your_department_ID",{
        'limit': '1'
        },(message) => {
            console.log("Success:", message);     
        },
        (error) => {
            console.log("Error:", error);  
        })
  }

//To set the ticketForm TextField Value 
function setPreFilledTicketFields(){
    var fields = [] 
    var ticketForms = [];

    let fieldApiName = "your_field_apiName(eg:- phone)"
    let fieldValue = "you_field_value(eg:- 140004101014"
    let isFiledEditable = true 
    let departmentId = "your_department_id"
    let layoutId = "your_layout_id"

    const ticketField1 = new ZDCustomizedTicketField(fieldApiName, fieldValue, isFiledEditable);
    fields.push(ticketField1);

    const ticketForm = new ZDCustomizedTicketForm(departmentId, layoutId, fields);
    ticketForms.push(ticketForm)

    ZohoDeskPortalSubmitTicket.preFillTicketFields(ticketForms)
}

//To hide fields in the form 
function setListfieldToBeShown(params){
    const visibleFields = [];
    let departmentID = "your_department_id"
    let layoutID = "your_layout_id"
    let fieldName = "field_name"

    const visibleField = new ZDVisibleTicketField(departmentID,layoutID, fieldName);
    visibleFields.push(visibleField)

    ZohoDeskPortalSubmitTicket.setFieldsListTobeShown(visibleFields)
}

// To create a ticket for Authenticated user
function createTicket(){
    let ticketParam = {
        "cf" : {
          "data" : "cf_new_data s"
        },
        "phone" : "your_phoneNumber",// your_phoneNumber
        "subject" : "New Ticket APIs",
        "departmentId" : "your_departmenttID",//your_departmentID
        "description" : "New Ticket API for handling all the problems arised during some few cases okey",
        "priority" : "High",
        "classification" : "NEw classification okey"
    }
    ZohoDeskPortalSDK.createTicket(ticketParam,(message)=>{
        //success callback
        console.log(message)
    },(error) =>{
        console.log(error)
    })
}

//To create a ticket for unauthenticated user
function createGuestTicket(){
    let ticketParam = {
        "cf" : {
          "data" : "cf_new_data"
        },
        "phone" : "your_phone_number",
        "contactName" : "New Contact",
        "subject" : "New Ticket API",
        "departmentId" : "your_department_id", //your department ID
        "description" : "New Ticket API for handling all the problems arised during some few cases(UnAuthenticated URL)",
        "priority" : "High",
        "classification" : "New classification",
        "email" : "newcontact@zylker.com"
      }
    ZohoDeskPortalSDK.createGuestTicket(ticketParam,(message)=>{
        //successCallback
      console.log(message)
    },(error) =>{
      console.log(error)
    })
 
}

//To get the most popular topics in the specific categories
function getMostDiscussedTopics(params){
      ZohoDeskPortalSDK.getMostDiscussedTopics({
        "categoryId": "Id" //your categoryID
      },
          (message) => {
            console.log("Success:", message);
        },
        (error) => {
            console.log("Error:", error);   
        })
}

//To get the Ticket Fields
const flags = "multiLayout,providePHIDetails,showIsNested";
function getFields(){
    ZohoDeskPortalSDK.getTicketFields({
        "departmentId": "id"//Your department id
      },flags,
        (message) => {
        console.log("Success:", message);
    },(error) => {
        console.log("Error:", error);
    })

}


  const map = {
    "departmentId": "155448000000010772",
    "layoutId":"155448000000011350"
  };


//To get the ticket form
function getTicketForm(){
    ZohoDeskPortalSDK.getTicketForm({
        "departmentId": "id",//your department id
        "layoutId":"id" //your layout id
      }, flags, (response) => {
      console.log(response)
    }, (error) => {
        console.log('Error fetching ticket form:', error);
    });
}

//To update the use information of the current user
function updateUserInformation(){
    ZohoDeskPortalSDK.updateUserInformation({
        "displayName": "your_name" // your name
      },(message)=>{
      console.log(message)
    },(error) => {
      console.log(error)
    });
}

//To fetch all the departments and their details
function getDepartment(){
    ZohoDeskPortalSDK.getDepartments((message)=>{
      console.log(message)
    },(error) => {
      console.log(error)
    });
}

//Add attachments for the tickets
function addAttachments(){
    const path =  '/Hello.txt'; // Path to the file
    reader.readFile(path, 'base64')
      .then((data) => {
        ZohoDeskPortalSDK.addAttachments("Hello.txt", data,(message) => {
          console.log("Uploaded Successfully:", message);
        },
        (error) => {
          console.log("Failed to upload Error:", error);
        });
        
      })
      .catch((err) => {
        console.log('Error reading file:', err);
      });
}

//Get callback once ticket created successfully.
function callbackToCreateTicket(){
  ZohoDeskPortalSubmitTicket.getCallbackOnCreate((success)=>{
        console.log(success)
      },(error)=>{
        console.log(error)
   });
  
}