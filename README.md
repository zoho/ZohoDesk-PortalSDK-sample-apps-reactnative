# ZohoDesk-PortalSDK-sample-apps-react-native

Sample code for integrating **Zoho Desk Portal SDK** into React-Native Applications.

## Getting Started 

This is a sample React-Native demo app demonstrating how to integrate and implement the **Zoho Desk Portal SDK** in React-Native applications.

## Installation
Add the following npmjs packages to the dependencies section in `package.json`:

```json
"dependencies": {
    "@zohocorp/zohodesk-portal-apikit": "^3.0.1",
    "@zohocorp/zohodesk-portal-configuration": "^3.0.1",
    "@zohocorp/zohodesk-portal-kb": "^3.0.1",
    "@zohocorp/zohodesk-portal-community": "^3.0.1",
    "@zohocorp/zohodesk-portal-ticket": "^3.0.1",
    "@zohocorp/zohodesk-portal-core": "^3.0.1",
    "@zohocorp/zohodesk-portal-chatkit": "^3.0.1",
    "@zohocorp/zohodesk-portal-salesiq": "^3.0.1",
}
```

To install the dependencies, execute the following command in your project directory:
```shell
npm install
```

For ios to run the following commands
```shell
cd ios && pod install
```

## Configuring SDK

To run this code sample , you need to replace your app details in `app.tsx` file

## Setting Up User Login

To test authorization, enter your **JWT token** in the input field.\
Refer to the `InputComponent.js` file to understand how the login and logout functions are configured.

## Modules 

The **Zoho Desk Portal SDK** includes various modules, such as **KB**, **Community**, **Tickets**, and **Chats**.\
To learn how to integrate them, check the `renderItem` variable in the `ListScreen.js` file.

## Customizing the Theme colours

The **Zoho Desk Portal SDK** provides options to customize theme colors for both Light and Dark modes.

You need to configure themes individually for both iOS and Android.

For **Android**
* Find the code snippet in `MainActivity.kt`

For **IOS**
* Find the code snippet in `AppDelegate.m`

## Configuring Push Notification

To configure push notifications:

####**For Android** 

1. Configure the app with your Firebase account.
2. Replace the `google-services.json` file in the location `android/app/google-services.json`.

####**For IOS** 

1. Upload the .p12 file of the APNs certificate.
2. Provide the corresponding certificate password.

## APIs Methods

The **Zoho Desk Portal SDK** provides direct access to API data, allowing seamless integration and customization in your applications.
Example code snippets can be found in the `src/components/ASAPApisActions.js` file.

## SDK Configurations

The **Zoho Desk Portal SDK** also provides options to customize its widgets and components.\
Refer to the `ConfigurationContext.js` file to learn about the available configurations in the **configurationsData** variable.

## Permalink

The **Zoho Desk Portal SDK** supports permalinks, enabling direct navigation to specific screens using a permalink.
for example implementations refer to the `permalinkAction` methods in the `InputField.js` file .


## For Reference

To learn more about **Zoho Desk Portal SDK** implementations, you can refer to the documentation provided [here](https://help.zoho.com/portal/en/kb/desk/developer-space/asap/react-native-sdk).