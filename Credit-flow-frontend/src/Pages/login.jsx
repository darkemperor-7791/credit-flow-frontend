import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../styles/login.css";

// React Component
const GetStartedPage = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [cifNumber, setCifNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [step, setStep] = useState("SEND");
  const navigate = useNavigate();

  const handleOtpChange = (index, value) => {
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleSubmit = () => {
    const otp = otpValues.join('');
    console.log('Form Data:', {
      accountNumber,
      cifNumber,
      mobileNumber,
      otp
    });

    alert('OTP Sent! Check console for form data.');

    setStep("VERIFY");
  };


  const handleVerifyOtp = () => {
    const otp = otpValues.join('');
    console.log('Verifying OTP:', otp);

    alert('OTP Verified!');

    // 👇 runs AFTER user clicks OK
    setStep("NEXT");
  };

    const handleNext = () => {
    navigate("/card-verify");
  };


  return (
    <div className="page-container">
      <div className="form-card">
        <h1 className="form-title">Let's get started</h1>
        
        <div className="progress-section">
          <span className="progress-text">Steps 1 of 5</span>
          <div className="progress-bar-container">
            <div className="progress-bar-fill"></div>
          </div>
        </div>

        <div className="input-group">
          <input
            type="text"
            className="input-field"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          
          <input
            type="text"
            className="input-field"
            placeholder="CIF number"
            value={cifNumber}
            onChange={(e) => setCifNumber(e.target.value)}
          />
          
          <input
            type="tel"
            className="input-field"
            placeholder="Mobile number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <span className='otp-line'>Enter OTP</span>
        <div className="otp-section">
          
          
          {otpValues.map((value, index) => (
            <div key={index} className="otp-diamond">
              <input
                id={`otp-${index}`}
                type="text"
                className="otp-input"
                maxLength="1"
                value={value}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleOtpKeyDown(index, e)}
              />
            </div>
          ))}
        </div>

        <button
          className="submit-button"
          onClick={
            step === "SEND"
              ? handleSubmit
              : step === "VERIFY"
              ? handleVerifyOtp
              : handleNext
          }
        >
          {step === "SEND"
            ? "Send OTP"
            : step === "VERIFY"
            ? "Verify OTP"
            : "Next"}
        </button>

        
        <p className="helper-text">Verify your Account & Mobile Number</p>
      </div>
    </div>
  );
};

export default GetStartedPage;