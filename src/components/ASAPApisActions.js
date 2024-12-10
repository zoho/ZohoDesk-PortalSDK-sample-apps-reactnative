import {ZohoDeskPortalSDK} from '@zohocorp/zohodesk-portal-apikit';
import {ZohoDeskPortalSubmitTicket} from '@zohocorp/zohodesk-portal-ticket';
import {ZDCustomizedTicketField, ZDCustomizedTicketForm, ZDVisibleTicketField} from '@zohocorp/zohodesk-portal-ticket/src/Components/ZDPortalSubmitTicketWrapper'
//In this File we, provided the APIs functions

// The following APIs require importing ZohoDeskPortalSDK from '@zohocorp/zohodesk-portal-apikit'

// To create a ticket for an authenticated user
function createTicket(){
  let ticketParam = {
      "cf" : {
        "data" : "cf_new_data s"
      },
      "phone" : "your_phoneNumber",// pass the phone number 
      "subject" : "New Ticket APIs",
      "departmentId" : "your_departmenttID",// The department ID to assign the ticket to
      "description" : "New Ticket API for handling all the problems arised during some few cases okey",
      "priority" : "High",
      "classification" : "NEw classification okey"
  }
  ZohoDeskPortalSDK.createTicket(ticketParam,(ticket)=>{
     // Success callback: Returns the ZDPTicket model class with details of the created ticket
    // ZDPTicket contains information like ticket ID, status, and other details
    console.log("Success: ",ticket)
  },(error) =>{
      console.log("Failure: ",error)
  })
}


// To create a ticket for an unauthenticated user
function createGuestTicket(){
  let ticketParam = {
      "cf" : {
        "data" : "cf_new_data"
      },
      "phone" : "your_phone_number",
      "contactName" : "New Contact",
      "subject" : "New Ticket API",
      "departmentId" : "your_department_id", // The department ID to assign the ticket to
      "description" : "New Ticket API for handling all the problems arised during some few cases(UnAuthenticated URL)",
      "priority" : "High",// Priority level of the ticket
      "classification" : "New classification",
      "email" : "newcontact@zylker.com"
    }
    
  ZohoDeskPortalSDK.createGuestTicket(ticketParam,(ticket)=>{
    // Success callback: Returns an array of ZDPTicket objects once the ticket is successfully created
    // ZDPTicket is the model class containing ticket details.
   console.log("Success: ",ticket)
  },(error) =>{
      // Error callback: Handles any errors that occur during ticket creation
    console.log("Failure: ",error)
  })

}


// To fetch layouts and their details for a specific department.
function getLayouts(){
    ZohoDeskPortalSDK.getLayouts({
        'departmentId': 'your_deparment_id',// Pass the department ID to retrieve layouts for that department.
        'limit': '1'// to limit the number of layouts returned. In this case, only 1 layout will be fetched
        },(layouts) => {
          // Success callback: The response will be an array of FormLayout objects.
          // Each FormLayout object contains details of the layout.
          console.log("Success:", layouts);
    },(error) => {
        console.log("Error:", error);
    })
}


// To retrieve the products for a specific department.
function getProducts(params){
  ZohoDeskPortalSDK.getProducts("your_department_ID",// The ID of the department for which products are to be fetched.
    {
    'limit': '1'// to limit the number of products returned. In this case, only 1 product will be fetched.
    },(products) => {
      // Success callback: The response will be an array of ZDPProduct objects.
      // Each ZDPProduct object is a model class containing details about a product,
      console.log("Success:", products);     
    },
    (error) => {
        // Error callback: Handles any errors that occur while fetching the products.
        console.log("Error:", error);  
    })
}


// The ID of the department for which ticket fields are to be fetched.
const flags = "multiLayout,providePHIDetails,showIsNested";
function getFields(){
    ZohoDeskPortalSDK.getTicketFields({
        "departmentId": "id"// The ID of the department for which ticket fields are to be fetched.
      },flags,
        (ticketFields) => {
        // Success callback: Returns an array of TicketField objects.
        // Each TicketField object is a model class containing details about the ticket fields,
        console.log("Success: ", ticketFields);
    },(error) => {
        // Error callback: Handles any errors that occur while fetching the ticket fields.
        console.log("Failure: ", error);
    })

}


// Retrieve the ticket form for a specific department and layout.
function getTicketForm(){
  ZohoDeskPortalSDK.getTicketForm({
      "departmentId": "id",// The ID of the department to fetch the ticket form for.
      "layoutId":"id" // The ID of the layout associated with the ticket form.
    }, flags, (ticketForm) => {
      // Success callback: Returns an array of TicketForm objects,
      console.log("Success :", ticketForm);
  }, (error) => {
      // Error callback: Handles any errors that occur while fetching the ticket form.
     console.log('Error fetching ticket form:', error);
  });
}


// Update the user information for the current user.
function updateUserInformation(){
  ZohoDeskPortalSDK.updateUserInformation({
      "displayName": "your_name" // The new display name for the user.
    },(profile)=>{
      // Success callback: This callback returns a ZDPProfile model object
      // containing the updated user profile details, such as the display name,
      // email, and other user information.
      console.log("Success: ",profile)
  },(error) => {
   // Error callback: Handles any errors that occur while updating the user information.
   console.log("Error to update the User Information: ",error)
  });
}


//Add attachments to a ticket.
function addAttachment(){
  const path =  '/Hello.txt'; // Specify the path to the file you want to upload.
  reader.readFile(path, 'base64')
    .then((data) => {
      ZohoDeskPortalSDK.addAttachments("Hello.txt",// File name of the attachment.
         data // Base64-encoded content of the file.
         ,(attachment) => {
          // Success callback: This callback returns the ZDPAttachment model object, 
          // which contains the details of the uploaded attachment.
           console.log("Uploaded Successfully:", message);
      },
      (error) => {
        console.log("Failed to upload Error:", error);
      });
      
    })
    .catch((err) => {
     // Handle errors that occur while reading the file.
     console.log('Error reading file:', err);
    });
}


//To get the most popular topics in the specific categories
function getpMostopularTopics(){
  ZohoDeskPortalSDK.getMostPopularTopics({
      "categoryId": "your_cateogory_id" // Replace "your_category_id" with the desired category ID.
    },
  (topics) => {
      // Success callback: This callback returns an array of ZDPTopic model objects, 
      // which contain the details of the most popular topics.
      console.log("Success: ", topics);   
  },(error) => {
      // Error callback: This callback handles any errors that occur while fetching the topics.
      console.log("Error fetching the topic: ", error);
  })
}


//To get the most popular topics in the specific categories
function getMostDiscussedTopics(params){
    ZohoDeskPortalSDK.getMostDiscussedTopics({
      "categoryId": "Id" // Replace "Id" with your specific category ID.
    },
    (topics) => {
       // Success callback: This callback returns an array of ZDPTopic model objects, 
      // each containing the details of the most discussed topics.
      console.log("Success:", topics);
      },
      (error) => {
      // Error callback: This callback handles errors that occur while fetching the topics.
      console.log("Error fetching the topic: ", error);   
      })
}


// The following APIs require  importing the ZdPortalSubmitTicket from the '@zohocorp/zohodesk-portal-ticket'
// And also need to import the ZDCustomizedTicketField, ZDCustomizedTicketForm, ZDVisibleTicketField from the '@zohocorp/zohodesk-portal-ticket/src/Components/ZDPortalSubmitTicketWrapper'

// This method will be called once the ticket is created successfully.  
// You can handle the success callback and error callback based on your needs.
function callbackToCreateTicket(){
  ZohoDeskPortalSubmitTicket.getCallbackOnCreate((ticket)=>{
      // Success callback: This callback returns an array of ZDPTicket objects 
      // after the ticket has been created successfully.
      console.log("Success: ",ticket)
    },(error)=>{
     // Error callback: This callback handles errors that occur during ticket creation.
     console.log("Failed: ",error)
 });
}


//To set the ticketForm TextField Value 
function setPreFilledTicketFields(){
  var fields = [] 
  var ticketForms = [];

  let fieldApiName = "your_field_apiName(eg:- phone)"
  let fieldValue = "you_field_value(eg:- 140004101014"
  let isFieldEditable = true 
  let departmentId = "your_department_id"
  let layoutId = "your_layout_id"

  // To set the ticket form text field values using the ZDCustomizedTicketField model class
  // fieldApiName -> The API name of the ticket form field, available in the "getTicketFields" API
  // fieldValue -> The value to be set for the field
  // isFieldEditable -> A boolean value indicating whether the field is editable
 const ticketField1 = new ZDCustomizedTicketField(fieldApiName, fieldValue, isFieldEditable);
  // You can also define ticketField2, ticketField3, etc., and push them into the fields array
  // Add the field to the array of ticket fields
  fields.push(ticketField1);

  // To set the ticket form text field values using the ZDCustomizedTicketForm model class
  // Pass the departmentId and layoutId of the ticket form along with the fields array of ZDCustomizedTicketField 
  const ticketForm = new ZDCustomizedTicketForm(departmentId, layoutId, fields);
  // Add the form to the array of ticket forms
  ticketForms.push(ticketForm)

  ZohoDeskPortalSubmitTicket.preFillTicketFields(ticketForms)
}


//To hide fields in the form 
function setListfieldToBeShown(){
  const visibleFields = [];
  let departmentID = "your_department_id"
  let layoutID = "your_layout_id"
  let fieldNames = ["filedName1", "fieldName2", "fieldName3"]

  //To set the ticket form TextField Value using the ZDVisibleTicketField model class
  //departmentID -> Pass the deparmtentId of the ticket form
  //layoutID -> Pass the layout ID
  //fieldName -> Pass the field name to be shown in the ticket form
  const visibleField = new ZDVisibleTicketField(departmentID,layoutID, fieldNames);
  //We can also set the array of visible fields
  visibleFields.push(visibleField)

  //To set the list of fields to be shown in the ticket form
  ZohoDeskPortalSubmitTicket.setFieldsListTobeShown(visibleFields)
}