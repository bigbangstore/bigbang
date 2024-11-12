// src/components/Form.js
import React from 'react';
import './Form.css';

const translations = {
  dari: {
    name: "نام",
    address: "آدرس",
    submit: "ارسال",
  },
  pashto: {
    name: "نوم",
    address: "پته",
    submit: "استول",
  },
};

function Form({ language, rtl }) {
  const labels = translations[language];

  return (
    <form className={`order-form ${rtl ? 'rtl' : ''}`}>
      <label>{labels.name}:</label>
      <input type="text" placeholder={labels.name} />
      <label>{labels.address}:</label>
      <input type="text" placeholder={labels.address} />
      <button type="submit">{labels.submit}</button>
    </form>
  );
}

export default Form;
