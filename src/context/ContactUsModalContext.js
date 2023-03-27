import React, { useState, createContext } from 'react';

const ContactUsModalContext = createContext();

export const ContactUsModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ContactUsModalContext.Provider value={{ showModal, toggleModal }}>
      {children}
    </ContactUsModalContext.Provider>
  );
};

export default ContactUsModalContext;
