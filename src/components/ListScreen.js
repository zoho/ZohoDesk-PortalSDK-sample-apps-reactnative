import React, { useEffect, useRef, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList, TextInput, ScrollView } from 'react-native';
import styles from '../styles/Styles';
import Colors from '../constants/Colors';
import { Button, List } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../constants/Animations';
import LinearGradient from 'react-native-linear-gradient';
import {ZohoDeskPortalHome} from '@zohocorp/zohodesk-portal-core'
import {ZohoDeskPortalKB} from '@zohocorp/zohodesk-portal-kb'
import {ZohoDeskPortalCommunity} from '@zohocorp/zohodesk-portal-community'
import {ZohoDeskPortalChatKit} from '@zohocorp/zohodesk-portal-chatkit'
import {ZohoDeskPortalSalesIQ} from '@zohocorp/zohodesk-portal-salesiq'
import {ZohoDeskPortalTicket, ZohoDeskPortalSubmitTicket} from '@zohocorp/zohodesk-portal-ticket'
import renderInputField from './InputField';
import InputComponent from './InputComponent';
import ListEmpty from './ListEmpty';
import ListItem from './ListItem';

export default function ListScreen() {

  const viewRef = useRef(null);
  const animation = Animations[Math.floor(Math.random() * Animations.length)];
  const renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} animation={animation} onPress={(name) => {
      if (name === "Home") {
        ZohoDeskPortalHome.show(); // Use to invoke ASAP sdk Home Screen

      } else if (name === "Knowledge Base") {
        ZohoDeskPortalKB.show(); // Use to invoke ASAP sdk Knowledge Screen

      } else if (name === "Community") {
        ZohoDeskPortalCommunity.show(); // Use to invoke ASAP sdk Community Screen

      } else if (name === "Guided Conversation") {
        ZohoDeskPortalChatKit.showGC();  // Use to invoke ASAP sdk GC Screen
        
      } else if (name === "Bussiness Messenger"){
        ZohoDeskPortalChatKit.showBM();

      } else if (name === "SalesIQ chat") {
        ZohoDeskPortalSalesIQ.show(); // Use to invoke ASAP sdk Live Chat Screen

      } else if (name === "Submit Ticket") {
        ZohoDeskPortalSubmitTicket.show(); // Use to invoke ASAP sdk Submit Ticket Screen

      } else if (name === "My Tickets") {
        ZohoDeskPortalTicket.show(); // Use to invoke ASAP sdk My Ticket Screen
      }

    }} />);

  return (
    <LinearGradient
      colors={['#b8eafd', '#79d8fd']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <InputComponent />
        <Animatable.View
          ref={viewRef}
          easing={'ease-in-out'}
          duration={500}
          style={styles.container}>
          <FlatList
            data={Array(8).fill('')}
            keyExtractor={(_, i) => String(i)}
            numColumns={2}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 40, borderColor: 'white', borderWidth: 3, borderRadius: 10, borderLeftWidth: 1, borderRightWidth: 1 ,paddingTop: 10}}
            ListEmptyComponent={ListEmpty}
            ListFooterComponent={
              <>
                <Text style={styles.title}>Permalink</Text>
                {renderInputField('KB Article', 'kbArticleText')}
                {renderInputField('KB Category', 'kbCategoryText')}
                {renderInputField('Community Topic', 'communityTopicText')}
                {renderInputField('Ticket ID', 'ticketIDText')}
              </>
            }
          />
        </Animatable.View>
      </SafeAreaView>
    </LinearGradient>
  );
}
