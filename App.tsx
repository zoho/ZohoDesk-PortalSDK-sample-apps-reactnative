import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList } from 'react-native';
import ListScreen from './src/components/ListScreen';
import { ZohoDeskPortalSDK } from '@zohocorp/zohodesk-portal-apikit';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ConfigurationScreen from './src/components/ConfigurationScreen';
import { ConfigurationProvider } from './src/components/ConfigurationContext';
import {ZohoDeskPortalSalesIQ} from '@zohocorp/zohodesk-portal-salesiq';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
    const [statusOfListener, setStatusOfListener] = React.useState(false);

    useEffect(() => {
      // Listener for successful initialization of ZohoDeskPortalSalesIQ
      const successSubscription = ZohoDeskPortalSalesIQ.addSuccessInitListener((data)=>{
        console.log("SalesIQ Inited Successfully")
        // To set the visibility of the chat components idividualy
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.PRE_CHAT_FORM,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.VISITOR_NAME,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.SCREENSHOT_OPTION,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.PHOTO_LIBRARY,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.MEDIA_CAPTURE,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.FILE_SHARING,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.EMAIL_TRANSCRIPT,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.RATING,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.FEEDBACK,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.REOPEN,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.END,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.END_WHEN_IN_QUEUE,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.END_WHEN_BOT_CONNECTED,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.END_WHEN_OPERATOR_CONNECTED,true);
        ZohoDeskPortalSalesIQ.setChatVisibility(ZohoDeskPortalSalesIQ.chatComponents.QUEUE_POSITION,true);
  
  
        // The visibilityMode modes are ALWAYS,NEVER and WHENACTIVECHAT
        ZohoDeskPortalSalesIQ.showLauncher(ZohoDeskPortalSalesIQ.visibilityMode.NEVER);
        
  
        ZohoDeskPortalSalesIQ.setKnowledgeBaseVisibility(true);
        ZohoDeskPortalSalesIQ.enableDragToDismiss(false);
        ZohoDeskPortalSalesIQ.setConversationVisibility(true);
        ZohoDeskPortalSalesIQ.showFeedbackAfterSkip(true);
        ZohoDeskPortalSalesIQ.hideQueueTime(false);
        ZohoDeskPortalSalesIQ.setLoggerEnabled(true);
        ZohoDeskPortalSalesIQ.showOfflineMessage(true);
        ZohoDeskPortalSalesIQ.setConversationTitle("Conversations");
  
        // Update the status of the listener
        setStatusOfListener(true);
      })

      // Listener for error during initialization of ZohoDeskPortalSalesIQ
      const errorSuccessSubscription = ZohoDeskPortalSalesIQ.addErrorInitListener((data) =>{
        console.log("Failed To Init SalesIQ")
      })
      
      // Cleanup function to remove listeners
      return () => {
        if(statusOfListener && successSubscription && errorSuccessSubscription){
          successSubscription.remove();
          errorSuccessSubscription.remove();
          console.log("Listeners are Removed");
        }
      }
    },[statusOfListener])
  
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
