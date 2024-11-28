import React from 'react';
import { StyleSheet } from "react-native";
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textViewContainer:{
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 10,
    },
    textFieldTitle:{
      fontSize: 18,
      fontWeight: '400',
      paddingBottom: 4,
      fontFamily: 'Lato-Bold'
    },
    textFieldContainer: {
      backgroundColor: Colors.white,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#bbdef8', // Border color
      borderRadius: 5,
      overflow: 'hidden',
    },
    textInput: {
      flex: 1,
      height: 45,
      paddingLeft: 10,
      fontSize: 16,
    },
    showButton: {
      backgroundColor: '#bbdef8', // Button color
      paddingVertical: 15,
      paddingHorizontal: 15,
      justifyContent: 'center',
    },
    showButtonText: {
      color: Colors.black,
      fontWeight: 'bold',
      fontSize: 16,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        height: 0.3,
        width: '100%',
        backgroundColor: Colors.gray,
        opacity: 0.8,
    },
    boldText: {
        fontWeight: 'bold',
    },
    contentContainerStyle: {
        paddingBottom: 200,
    },
    contentContainerStyle2: {
        paddingBottom: 100,
    },
    name: {
        fontWeight: 'normal',
        fontSize: 12,
        color: 'black',
      },
      separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0, 0, 0, .08)',
      },
      listEmpty: {
        height: Dimensions.get('window').height,
        alignItems: 'center',
        justifyContent: 'center',
      },
      listItem: {
        height: 200,
        width: Dimensions.get('window').width / 2 - 16,
        backgroundColor: Colors.white,
        margin: 8,
        borderRadius: 10,
      }, 
      iconWrapper: {
        height: 30,
        width: 30,
        position: 'absolute', 
        right: 2,
        zIndex: 10,
      },
      image: {
        position: 'relative',
        height: 120,
        margin: 5,
        borderRadius: 10,
        backgroundColor: Colors.primary,
      },
      detailsContainer: {
        paddingHorizontal: 16,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      centeredText: {       
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.darkGray,
      },
      centeredContainer: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center', // Vertical centering
        alignItems: 'center',     // Horizontal centering
      },
      icon: {
        position: 'absolute', // To place it in the corner
        top: 10, 
        right: 10, 
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
      },
      textField: {
        height: 40,
        margin: 12,
        borderWidth: 1,
      },
      title:{
        paddingTop: 30,
        paddingLeft: 10,
        fontSize: 23,
        fontWeight: 'bold'
      },
      fieldTitle:{
        paddingLeft: 10,
        fontSize: 14,
      }
})

export default styles;