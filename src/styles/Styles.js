import React from 'react';
import { StyleSheet } from "react-native";
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1
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
      image: {
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
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.darkGray,
        flex: 1,
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
})

export default styles;