import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [agree, setAgree] = useState(false);
  
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({
      email,
      fullName,
      address,
      address2,
      city,
      province,
      postalCode,
      agree,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Entry Form</h1>
        <form onSubmit={handleSubmit} className="data-entry-form">
          <div className="form-group">
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required placeholder="1234 Main St" />
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Apartment, studio, or floor" />
          </div>
          <div className="form-group">
            <label>City</label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select value={province} onChange={(e) => setProvince(e.target.value)} required>
              <option value="">Choose...</option>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Alberta">Alberta</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
          </div>
          <div className="form-group checkbox">
            <label>
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              Agree to Terms & Conditions?
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div className="submitted-info">
            <h2>Submitted Information</h2>
            <p>Email: {submittedData.email}</p>
            <p>Full Name: {submittedData.fullName}</p>
            <p>Address: {submittedData.address}</p>
            <p>Address 2: {submittedData.address2}</p>
            <p>City: {submittedData.city}</p>
            <p>Province: {submittedData.province}</p>
            <p>Postal Code: {submittedData.postalCode}</p>
            <p>Agreed to Terms: {submittedData.agree ? "Yes" : "No"}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

