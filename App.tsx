import React from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList } from 'react-native';
import ListScreen from './src/components/ListScreen';
import { ZohoDeskPortalSDK } from '@zohocorp/zohodesk-portal-apikit';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ConfigurationScreen from './src/components/ConfigurationScreen';
import { ConfigurationProvider } from './src/components/ConfigurationContext';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  
  // Initializes the ASAP SDK
  // To pass the orgId, appId and dc, you can get it from the ASAP Add on details from the web
  ZohoDeskPortalSDK.initialise("your_orgId", "your_appId", "your_dc");

  // use this method to enable logs
  ZohoDeskPortalSDK.enableLogs();  
  return (
    //The configuration provider to provide the ASAP configurations to the components
    <ConfigurationProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={ListScreen}/>
          <Stack.Screen 
            name="Configuration" 
            component={ConfigurationScreen} 
            options={({route}) => ({title: route.params.screenName + " Configurations"})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ConfigurationProvider>
  );
}

export default App;
