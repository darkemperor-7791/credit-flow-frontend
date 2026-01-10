import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Lock } from "lucide-react";
import "../styles/card-verify.css";


// React Component
const VerifyCardPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [atmPin, setAtmPin] = useState('');
  const navigate = useNavigate();

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\s/g, '');
    if (/^\d*$/.test(value) && value.length <= 16) {
      // Format with spaces every 4 digits
      value = value.match(/.{1,4}/g)?.join(' ') || value;
      setCardNumber(value);
    }
  };

  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2);
      }
      setExpiryDate(value);
    }
  };

  const handleAtmPinChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) {
      setAtmPin(value);
    }
  };

  const handleSubmit = () => {
    console.log('Card Verification Data:', {
      cardNumber,
      expiryDate,
      atmPin
    });
    alert('Card verification initiated! Check console for data.');
  };

  return (
    <div className="page-container">
      <div className="form-header">
      <div className="form-card">
        <button className="back-button"
        onClick={() => (navigate(-1))}><ArrowLeft className='ArrowLeft'/></button>
        
        <h1 className="form-title">Verify your Card</h1>
        
        <div className="progress-section">
          <span className="progress-text">Steps 2 of 5</span>
          <div className="progress-bar-container">
            <div className="progress-bar-fill"></div>
          </div>
          
        </div>

        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Card number"
            value={cardNumber}
            onChange={handleCardNumberChange}
          />
          
          <div className="expiry-wrapper">
            <input
              type="text"
              className="input-field"
              placeholder="Expiry date"
              value={expiryDate}
              onChange={handleExpiryDateChange}
            />

          </div>
          
          <input
            type="password"
            className="input-field"
            placeholder="ATM PIN"
            value={atmPin}
            onChange={handleAtmPinChange}
            maxLength="4"
          />
        </div>
        

        <button className="submit-button" onClick={handleSubmit}>
          verify card
        </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCardPage;