import React, { useEffect, useRef, useState, useMemo,useContext } from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, Switch, View, FlatList, TextInput, ScrollView } from 'react-native';
import { screensEnabled } from 'react-native-screens';
import {ZohoDeskPortalHome} from '@zohocorp/zohodesk-portal-core'
import {ZohoDeskPortalKB} from '@zohocorp/zohodesk-portal-kb'
import {ZohoDeskPortalCommunity} from '@zohocorp/zohodesk-portal-community'
import {ZohoDeskPortalTicket, ZohoDeskPortalSubmitTicket} from '@zohocorp/zohodesk-portal-ticket'
import { ContinousBaseGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/gesture';
import { ColorSpace } from 'react-native-reanimated';
import { ConfigurationContext } from './ConfigurationContext';
import {ZohoDeskPortalConfiguration} from '@zohocorp/zohodesk-portal-configuration';

export default function ConfigurationScreen({route}) {

    const {screenName} = route.params;
    const { configurationData, setConfigurationData } = useContext(ConfigurationContext);

    //To get the configurations based on the screen
    const [data, setData] = useState(configurationData.filter(item => item.screen == screenName));


      useEffect(()=>{
        setConfigurations()
      },[data])

      //Set The configurations based on the screen
      const setConfigurations = () =>{
        console.log(screenName)
        if (screenName === "Home"){
          //if the screen configuration is Home
          homeConfiguration()
        }else if (screenName === "My Tickets"){
          //If the screen is mytickets 
          ticketConfiguration()
        }else if (screenName === "Knowledge Base"){
          // If the screen is Knowledge Base 
          kbConfiguration()
        }else if (screenName === "Community"){
          // If the screen is Community 
          communityConfiguration()
        }else {
          // If the screen is module  
          moduleConfiguration()
        }
      }

      function moduleConfiguration(){
        ZohoDeskPortalConfiguration.setConfiguration(
          {
              disableSidemenu: data[0].isEnabled, // true or false based on the configuration
              disableLanguageChooser: data[1].isEnabled,
              disablePoweredByZoho: data[2].isEnabled,
              disableGlobalSearch: data[3].isEnabled,
              disableKB: data[4].isEnabled,
              disableCommunity: data[5].isEnabled,
              disableAddTopic: data[6].isEnabled,
              disableMyTicket: data[7].isEnabled,
              disableSubmitTicket: data[8].isEnabled,
              disableGuidedConversation: data[9].isEnabled,
              disableAnswerBot: data[10].isEnabled,
              disableBusinessMessanger: data[11].isEnabled,
              disableSalesIQ: data[12].isEnabled,
              enableModuleBasedSearch: data[13].isEnabled,
  
              disableScreenShot: data[14].isEnabled,
              disableCopyPaste: data[15].isEnabled,
              disableDownloadAttachment: data[16].isEnabled,
              disableUploadAttachment: data[17].isEnabled,
          }
      );
      }

      function homeConfiguration(){
        ZohoDeskPortalHome.setConfiguration(
          {
              enableCommunity: data[0].isEnabled, // true or false based on the configuration
              enableHelpCenter: data[1].isEnabled,
              enableMyTicket: data[2].isEnabled,
              enableCreateTicket: data[3].isEnabled,
              enableAddTopic: data[4].isEnabled,
              showAnswerBot: data[5].isEnabled,
              showChat: data[6].isEnabled,
              showGC: data[7].isEnabled,
              showBM: data[8].isEnabled
          }
      );
      }
      function communityConfiguration(){
        ZohoDeskPortalCommunity.setConfiguration(
          {
              isTopicEditAllowed: data[0].isEnabled, // true or false based on the configuration
              isTopicDeleteAllowed: data[1].isEnabled,
              isReplyAllowed: data[2].isEnabled,
              isReplyEditAllowed: data[3].isEnabled,
              isReplyDeleteAllowed: data[4].isEnabled,
              isTopicDetailSearchAllowed: data[5].isEnabled,
          }
      );
      }

      function ticketConfiguration(){
        ZohoDeskPortalTicket.setConfiguration({
          isReplyAllowed: data[0].isEnabled, // true or false based on the configuration
          isCommentAllowed: data[1].isEnabled,
          isTicketUpdateAllowed: data[2].isEnabled,
          isCommentEditAllowed: data[3].isEnabled,
          isCommentDeleteAllowed: data[4].isEnabled,
          isAddTicketAllowed: data[5].isEnabled,
          isCustomerHappinessThreadAllowed: data[6].isEnabled,
          isTicketChannelAllowed: data[7].isEnabled,
          isTicketPropertiesAllowed: data[8].isEnabled,
          disableTicketDetailSearch: data[9].isEnabled
        })
      }

      function kbConfiguration(){
        ZohoDeskPortalKB.setConfiguration({
          disableArticleLike: data[0].isEnabled, // true or false based on the configuration
          disableArticleDislike: data[1].isEnabled,
          disableArticleDetailSearch: data[2].isEnabled
        });
      }
      const toggleSwitch = (id) => {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, isEnabled: !item.isEnabled } : item
        );
        //To update the screen Configurations
        setData(updatedData);
        //To udpate the configurations in the context
        setConfigurationData(prevData =>
          prevData.map((item) =>
            item.id === id ? { ...item, isEnabled: !item.isEnabled } : item
          )
        );
      };

      // Render item
    const renderItem = ({ item }) => (
        <View style={styles.row}>
             <Text style={styles.text}>{item.title}</Text>
             <Switch
                trackColor={{ false: '#767577', true: '#bbdef8' }}
                thumbColor={item.isEnabled ? '#ffffff' : '#f4f3f4'}
                onValueChange={() => toggleSwitch(item.id)}
                value={item.isEnabled}
            />
        </View>
    );
      
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      paddingHorizontal: 16,
      paddingTop: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
      color: '#333',
    },
    separator: {
      height: 10,
    },
  });
  
  