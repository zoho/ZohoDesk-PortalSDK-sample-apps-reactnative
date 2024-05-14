import React from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList } from 'react-native';
import ListScreen from './src/components/ListScreen';
import { ZohoDeskPortalSDK } from 'react-native-zohodesk-portal-sdk';

function App(): React.JSX.Element {
  
  ZohoDeskPortalSDK.initialise("orgId", "appId", "dc"); // Initializes the ASAP SDK

  ZohoDeskPortalSDK.enableLogs();  // use this method to enable logs
  return (
    <ListScreen />
  );
}

export default App;
