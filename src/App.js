import React from 'react';
import './App.css';

import Header from './components/Header';
import TranslatableText from './components/TranslatableText';
import LanguageProvider from './components/LanguageProvider';

export const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;

export const App = () => (
  <LanguageProvider>
    <div>
      <Header />
      <h1><TranslatableText textKey='title'/></h1>
      <h2><TranslatableText textKey='text.fun'/></h2>
      <p><TranslatableText textKey='text.day'/></p>
    </div>
  </LanguageProvider>
);
