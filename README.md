# ZohoDesk-PortalSDK-sample-apps-flutter

Sample code for integrating Zoho Desk Portal SDK into React-Native Applications.

## Configuring SDK

To run this code sample , you need to replace your app details in app.tsx file

## Setup User Login

To check autentication , you need to enter your JWT token in the input field 
In InputComponent.js file check how how login and logout function need to be configured

## Customize the Theme colours

Zoho Desk Portal SDK addon provides option to edit the Theme colours for both Light and Dark mode. Todo that you need to configure your themes individually for both ios and android modules.

For Android -> Find the code snippet in MainApplication.kt
For IOS -> Find the code snippet in AppDelegate.m

## Configuring Push Notification

For push notifications

Android -> you need to configure the app with your firebase account and add your google-service.json
IOS -> you need to upload the p12 file of the APNs certificate along with its password. 
