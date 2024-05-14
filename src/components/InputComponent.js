import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import { ZohoDeskPortalSDK } from 'react-native-zohodesk-portal-sdk';
import Colors from '../constants/Colors';
import styles from '../styles/Styles';

const InputComponent = () => {
  const [token, setToken] = useState('');

  const handleNameChange = (text) => {
    setToken(text);
  };

  const handleLoginButtonPress = () => {
    ZohoDeskPortalSDK.isUserSignedIn((isSignedIn) => { //use this methods for authenticating users in the asap SDK
      if (!isSignedIn) { // used to check if the user is already signed in or not
        ZohoDeskPortalSDK.setJWTToken(
          token,
          (msg) => {
            //User Authenticated Successfully
            alert('Success Alert ' + msg);
          },
          (msg) => {
            //User Authentication Failed
            alert('Failure Alert ' + msg);
          }
        );
      } else {
        alert("User is already signed in");
      }
    });
  };

  const handleLogoutButtonPress = () => { //use this methods for logout the users from asap SDK
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
        <Button title="Login" onPress={handleLoginButtonPress} color='#efbbcc' />
        <Button title="Logout" onPress={handleLogoutButtonPress} color='#efbbcc' />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Enable Notification" onPress={enablePushNotification}  color='#efbbcc' />
        <Button title="Disable Notification" onPress={disablePushNotification } color='#efbbcc' />
      </View>
    </View>
  );
};
export default InputComponent;
