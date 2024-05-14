import React, { useEffect, useRef, useState, useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList, TextInput } from 'react-native';
import styles from '../styles/Styles';
import Colors from '../constants/Colors';
import { Button, List } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import { Animations } from '../constants/Animations';
import LinearGradient from 'react-native-linear-gradient';
import {
  ZDPortalHome,
  ZDPortalKB,
  ZDPortalCommunity,
  ZDPortalLiveChat,
  ZDPortalChat,
  ZDPortalSubmitTicket,
  ZDPortalTickets
} from 'react-native-zohodesk-portal-sdk';
import InputComponent from './InputComponent';
import ListEmpty from './ListEmpty';
import ListItem from './ListItem';

export default function ListScreen() {

  const viewRef = useRef(null);
  const animation = Animations[Math.floor(Math.random() * Animations.length)];
  const renderItem = ({ item, index }) => (
    <ListItem item={item} index={index} animation={animation} onPress={(name) => {
      if (name === "Home") {
        ZDPortalHome.show(); // Use to invoke ASAP sdk Home Screen

      } else if (name === "Knowledge Base") {
        ZDPortalKB.show(); // Use to invoke ASAP sdk Knowledge Screen

      } else if (name === "Community") {
        ZDPortalCommunity.show(); // Use to invoke ASAP sdk Community Screen

      } else if (name === "Guided Conversation") {
        ZDPortalLiveChat.show();  // Use to invoke ASAP sdk GC Screen

      } else if (name === "Live Chat") {
        ZDPortalChat.show(); // Use to invoke ASAP sdk Live Chat Screen

      } else if (name === "Submit Ticket") {
        ZDPortalSubmitTicket.show(); // Use to invoke ASAP sdk Submit Ticket Screen

      } else if (name === "My Tickets") {
        ZDPortalTickets.show(); // Use to invoke ASAP sdk My Ticket Screen
      }

    }} />);

  return (
    <LinearGradient
      colors={['#ffffff', '#da1b60']}
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
            data={Array(7).fill('')}
            keyExtractor={(_, i) => String(i)}
            numColumns={2}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }}
            ListEmptyComponent={ListEmpty}
          />
        </Animatable.View>
      </SafeAreaView>
    </LinearGradient>
  );
}
