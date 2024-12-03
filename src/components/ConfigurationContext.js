import React, { createContext, useState } from 'react';

// Create a context for the configuration data
export const ConfigurationContext = createContext();

export const ConfigurationProvider = ({ children }) => {
  const [configurationData, setConfigurationData] = useState([
   // Home screen configuration pre-setup
    // The default value is set in the isEnabled (true or false) for each configuration
    { id: '1', title: 'Enable Community', isEnabled: true , screen: "Home" },
    { id: '2', title: 'Enable Knowledge Base', isEnabled: true, screen: "Home" },
    { id: '3', title: 'Enable My Ticket', isEnabled: true , screen: "Home"},
    { id: '4', title: 'Enable Create Ticket', isEnabled: true , screen: "Home"},
    { id: '5', title: 'Enable Add Topic', isEnabled: true, screen: "Home" },
    { id: '6', title: 'Enable Answer Bot', isEnabled: true , screen: "Home"},
    { id: '7', title: 'Enable SalesIQ Chat', isEnabled: true , screen: "Home"},
    { id: '8', title: 'Enable Guided Conversation', isEnabled: true , screen: "Home"},
    { id: '9', title: 'Enable Bussiness Messenger', isEnabled: true , screen: "Home" },
  
    // My Tickets configuration pre-setup
    { id: '10', title: 'Is Reply Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '11', title: 'Is Comment Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '12', title: 'Is Ticket Update Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '13', title: 'Is Comment Edit Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '14', title: 'Is Comment Delete Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '15', title: 'Is Add Ticket Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '16', title: 'Is Customer Happiness Thread Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '17', title: 'Is Ticket Channel Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '18', title: 'Is Ticket Propertied Allowed', isEnabled: true , screen: "My Tickets" },
    { id: '19', title: 'Disable Ticket Detail Search', isEnabled: false , screen: "My Tickets" },
  
    //Knowledge Base configuration pre-setup
    { id: '20', title: 'Disable Article Like', isEnabled: false , screen: "Knowledge Base" },
    { id: '21', title: 'Disable Article DisLike', isEnabled: false , screen: "Knowledge Base" },
    { id: '22', title: 'Disable Article Detail Search', isEnabled: false , screen: "Knowledge Base" },
  
    //Community Configuration pre-setup
    { id: '23', title: 'Is Topic Edit Allowed', isEnabled: true , screen: "Community" },
    { id: '24', title: 'Is Topic Delete Allowed', isEnabled: true , screen: "Community" },
    { id: '25', title: 'Is Reply Allowed', isEnabled: true , screen: "Community" },
    { id: '26', title: 'Is Reply Edit Allowed', isEnabled: true , screen: "Community" },
    { id: '27', title: 'Is Reply Delte Allowed', isEnabled: true , screen: "Community" },
    { id: '28', title: 'Is Topic Detail Search Allowed', isEnabled: true , screen: "Community" },
  
    //Module Configuration pre-setup
    { id: '29', title: 'Disable side menu', isEnabled: false , screen: "Module" },
    { id: '30', title: 'Disable language', isEnabled: false , screen: "Module" },
    { id: '31', title: 'Disable Powered by zoho', isEnabled: false , screen: "Module" },
    { id: '32', title: 'Disable Gloabl search ', isEnabled: false , screen: "Module" },
    { id: '33', title: 'Disable KB', isEnabled: false , screen: "Module" },
    { id: '34', title: 'Disable Community', isEnabled: false , screen: "Module" },
    { id: '35', title: 'Disable Add Topic', isEnabled: false , screen: "Module" },
    { id: '36', title: 'Disable My Ticket', isEnabled: false , screen: "Module" },
    { id: '37', title: 'Disable Submit Ticket', isEnabled: false , screen: "Module" },
    { id: '38', title: 'Disable Guided Conversation', isEnabled: false , screen: "Module" },
    { id: '39', title: 'Disable Answer bot', isEnabled: false , screen: "Module" },
    { id: '40', title: 'Disable Business Messaner', isEnabled: false , screen: "Module" },
    { id: '41', title: 'Disable sales IQ', isEnabled: false , screen: "Module" },
    { id: '42', title: 'Disable Module Based search', isEnabled: false , screen: "Module" },
    { id: '43', title: 'Disable Screen shot', isEnabled: false , screen: "Module" },
    { id: '44', title: 'Disable Copy paste', isEnabled: false , screen: "Module" },
    { id: '45', title: 'Disable Downlaod attachment', isEnabled: false , screen: "Module" },
    { id: '46', title: 'Disable Upload Attachment', isEnabled: false , screen: "Module" },
  
  ]);  

  return (
    <ConfigurationContext.Provider value={{ configurationData, setConfigurationData }}>
      {children}
    </ConfigurationContext.Provider>
  );
};