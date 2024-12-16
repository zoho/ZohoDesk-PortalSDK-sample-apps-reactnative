import { StyleSheet, TouchableOpacity, Text, SafeAreaView, useColorScheme, View, FlatList, TextInput } from 'react-native';
import styles from '../styles/Styles';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const asapModules = [
    { name: "Home", description: "ASAP Home Page contains all available ASAP Components", configuration: true },
    { name: "Knowledge Base", description: "ASAP Knowledge Base, find articles" , configuration: true },
    { name: "Community", description: "ASAP Community, connect with people", configuration: true  },
    { name: "My Tickets", description: "Follow up with your tickets" , configuration: true },
    { name: "Guided Conversation", description: "Chat with GC Bot for more info" },
    { name: "Bussiness Messenger", description: "Chat with Bussiness messenger"},
    { name: "SalesIQ chat", description: "Chat with agent for more info" },
    { name: "Submit Ticket", description: "Don't find any solution, raise your ticket" },
  ];
  

const ListItem = ({ item, index, animation, onPress }) => {
  const navigation = useNavigation()
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
          <View style={[styles.image, { backgroundColor: "#bbdef8"}]}>
              {
                asapModules[index].configuration ?
                  <TouchableOpacity onPress={()=>{navigation.navigate("Configuration",{screenName: asapModules[index].name})}} style={styles.iconWrapper}>
                    <Icon name="settings" size={30} color="#000" style={styles.icon} ></Icon>
                  </TouchableOpacity> 
                :
                <></>
              }
            <View style={styles.centeredContainer}>
            <Text style={styles.centeredText}>{asapModules[index].name}</Text>
            </View>
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