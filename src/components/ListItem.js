import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList, TextInput } from 'react-native';
import styles from '../styles/Styles';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';


const asapModules = [
    { name: "Home", description: "ASAP Home Page contains all available ASAP Components" },
    { name: "Knowledge Base", description: "ASAP Knowledge Base, find articles" },
    { name: "Community", description: "ASAP Community, connect with people" },
    { name: "Guided Conversation", description: "Chat with GC Bot for more info" },
    { name: "Live Chat", description: "Chat with agent for more info" },
    { name: "Submit Ticket", description: "Don't find any solution, raise your ticket" },
    { name: "My Tickets", description: "Follow up with your tickets" }
  ];
  

const ListItem = ({ item, index, animation, onPress }) => {
  const handlePress = () => {
    onPress(asapModules[index].name);
  };
  return (
    <Animatable.View
      animation={animation}
      duration={1000}
      delay={index * 300}
    >
      <View style={styles.listItem}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handlePress}>
          <View style={[styles.image, { backgroundColor: Colors.lightPink}]}>
            <Text style={styles.centeredText}>{asapModules[index].name}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{asapModules[index].description}</Text>
        </View>
      </View>
    </Animatable.View>
  );
};
export default ListItem;