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
       // Display a Knowledge Base article based on its permalink.
        // Example URL: https://your_helpcenter.in/portal/en/kb/articles/fundamental-types
        // Pass only the article permalink: "fundamental-types".
      ZohoDeskPortalKB.showArticle(formValues.kbArticleText)
    }else if (fieldName === "kbCategoryText"){
        // Display a Knowledge Base category based on its permalink.
        // Example URL: https://your_helpcenter.in/portal/en/community/asapmobileautomation
        // Pass only the category permalink: "asapmobileautomation".
        // For Nested Cateogries:
        //    Example URL: https://your_helpcenter.in/portal/en/community/asapmobileautomation/general
        //    Pass the category permalink with the parent category permalink: "asapmobileautomation/general"
      ZohoDeskPortalKB.showCategory(formValues.kbCategoryText)
    }else if (fieldName === "communityTopicText"){
        // Display a community topic based on its permalink.
        // Example URL: https://your_helpcenter.in/portal/en/community/topic/swift-package-manager
        // Pass only the topic permalink: "swift-package-manager".
      ZohoDeskPortalCommunity.showTopic(formValues.communityTopicText)
    }else if (fieldName === "ticketIDText"){
       // Display ticket details based on the ticket ID.
      // Example ticket ID: "12345678990".
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