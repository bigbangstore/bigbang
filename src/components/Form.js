import React, { useState } from 'react';
import './Form.css';

const translations = {
  dari: {
    name: "نام",
    quantity: "مقدار",
    mobile: "فعال موبایل نمبر",
    address: "آدرس",
    note: "یادداشت برای مالک",
    submit: "ارسال",
  },
  pashto: {
    name: "نوم",
    quantity: "مقدار",
    mobile: "فعال موبایل نمبر",
    address: "پته",
    note: "يادښت د مالک لپاره",
    submit: "استول",
  },
};

function Form({ language, rtl, product }) {
  const labels = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    mobile: '',
    address: '',
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.quantity || !formData.mobile || !formData.address) {
      alert('Please fill in all required fields.');
      return;
    }

    const message = `
      *${product.title}*
      \n${labels.name}: ${formData.name}
      \n${labels.quantity}: ${formData.quantity}
      \n${labels.mobile}: ${formData.mobile}
      \n${labels.address}: ${formData.address}
      \n${labels.note}: ${formData.note || "N/A"}
    `;

    const phoneNumber = '93790958221';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className={`order-form ${rtl ? 'rtl' : ''}`} onSubmit={handleSubmit}>
      <label>{labels.name}:</label>
      <input type="text" name="name" placeholder={labels.name} value={formData.name} onChange={handleChange} />
      
      <label>{labels.quantity}:</label>
      <input type="number" name="quantity" placeholder={labels.quantity} value={formData.quantity} onChange={handleChange} min="1" />
      
      <label>{labels.mobile}:</label>
      <input type="tel" name="mobile" placeholder={labels.mobile} value={formData.mobile} onChange={handleChange} />
      
      <label>{labels.address}:</label>
      <input type="text" name="address" placeholder={labels.address} value={formData.address} onChange={handleChange} />
      
      <label>{labels.note}:</label>
      <textarea name="note" placeholder={labels.note} value={formData.note} onChange={handleChange} />
      
      <button type="submit">{labels.submit}</button>
    </form>
  );
}

export default Form;
