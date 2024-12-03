import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import { ZohoDeskPortalSDK } from '@zohocorp/zohodesk-portal-apikit';
import Colors from '../constants/Colors';
import styles from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

const InputComponent = () => {
  const navigation = useNavigation()
  const [token, setToken] = useState('');

  const handleNameChange = (text) => {
    setToken(text);
  };

  const handleLoginButtonPress = () => {
    //use this methods for authenticating users with the asap SDK
    ZohoDeskPortalSDK.isUserSignedIn((isSignedIn) => { 
      //It check if the user is already signed to the ASAP SDK
      if (!isSignedIn) {
        ZohoDeskPortalSDK.loginWithJWTToken(
          token,
          (successMsg) => {
            //User Authenticated Successfully to the ASAP SDK
            alert('Success Alert ' + successMsg);
          },
          (error) => {
           // User Authentication Failed
            // If the authentication fails, ensure that the SDK is initialized with the correct add-on details.
            // Also, verify that the bundle IDs for iOS and Android applications are correctly configured,
            // matching the values set in the web add-on configuration.
            alert('Failure Alert ' + error);
          }
        );
      } else {
        alert("User is already signed in");
      }
    });
  };

  const handleLogoutButtonPress = () => { 
    //use this methods for logout the users from ASAP SDK
    ZohoDeskPortalSDK.logout(
      (msg) => {
        //User Logged out Successfully
        alert("Success " + msg);
      },
      (msg) => {
        //Failed to log out the user
        alert("Failure " + msg);
      }
    );
  };

  const enablePushNotification = () => {
     // use this method to enable push notification
     ZohoDeskPortalSDK.enablePush()
  }

  const disablePushNotification = () => {
     // use this method to diable push notification
     ZohoDeskPortalSDK.disablePush()
  }

  return (
    <View >
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={token}
        placeholder="Enter the JWT Token"
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLoginButtonPress} color='#030001' />
        <Button title="Logout" onPress={handleLogoutButtonPress} color='#030001' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Enable Notification" onPress={enablePushNotification}  color='#030001' />
        <Button title="Disable Notification" onPress={disablePushNotification } color='#030001' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Module configurations" onPress={()=>{navigation.navigate("Configuration",{screenName: "Module"})} } color='#030001' />
      </View>
    </View>
  );
};
export default InputComponent;
