import React from 'react';
import { LanguageConsumer } from '../App.js';
import dictionary from '../dictionary';

const TranslatableText = props => (
  <LanguageConsumer>
    {({ language }) => dictionary[language][props.textKey]}
  </LanguageConsumer>
);

export default TranslatableText;
