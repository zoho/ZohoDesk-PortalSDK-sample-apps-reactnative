import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import styles from '../styles/Styles';
import React, { useEffect, useRef, useState, useMemo } from 'react';



const  renderInputField = (title, fieldName) => {


const [formValues, setFormValues] = useState({
    kbArticleText: '',
    kbCategoryText: '',
    communityTopicText: '',
    ticketIDText: '',
  });

  const handleInputChange = (fieldName, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
  };

  function permalinkAction(fieldName){
    if (fieldName == "kbArticleText"){
        // To pass the kB article permalink
        // example:- https://your_help.in/portal/en/kb/articles/fundamental-types
        // To paste the below text "fundamental-types"
      ZohoDeskPortalKB.showArticle(formValues.kbArticleText)
    }else if (fieldName === "kbCategoryText"){
        // TO pass the category permalink
      ZohoDeskPortalKB.showCategory(formValues.kbCategoryText)
    }else if (fieldName === "communityTopicText"){
        // To pass the community topic permalink
      ZohoDeskPortalCommunity.showTopic(formValues.communityTopicText)
    }else if (fieldName === "ticketIDText"){
        // To pass the ticket id 
      ZohoDeskPortalTicket.showTicketDetail(formValues.ticketIDText)
    }
  }

    return (
    <View style={styles.textViewContainer} key={fieldName}>
      <Text style={styles.textFieldTitle}>{title}</Text>
      <View style={styles.textFieldContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter text here"
          value={formValues[fieldName]}
          onChangeText={(value) => handleInputChange(fieldName, value)}
        />
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => permalinkAction(fieldName)}
        >
          <Text style={styles.showButtonText}>Show</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default renderInputField