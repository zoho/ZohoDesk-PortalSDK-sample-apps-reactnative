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
    ZohoDeskPortalSDK.isUserSignedIn((isSignedIn) => { //use this methods for authenticating users in the asap SDK
      if (!isSignedIn) { // used to check if the user is already signed in or not
        ZohoDeskPortalSDK.loginWithJWTToken(
          token,
          (msg) => {
            //User Authenticated Successfully
            alert('Success Alert ' + msg);
          },
          (msg) => {
            //User Authentication Failed
            //If the user set is failure to ensure the SDK initialised with the correct addOn details
            //And also verify the bundle id is set correctly for the applications of iOS and android which is set in the web addOn
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
