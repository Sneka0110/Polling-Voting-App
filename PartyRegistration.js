import React, { useState } from 'react';
import axios from 'axios';

const PartyRegistration = () => {
  const [partyName, setPartyName] = useState('');
  const [partyId, setPartyId] = useState('');
  const [partyImage, setPartyImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/parties', { partyName, partyId, partyImage, createdOn: new Date() })
      .then(response => {
        console.log(response.data);
        // Clear form or provide feedback
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register Party</h2>
      <input type="text" placeholder="Party Name" onChange={(e) => setPartyName(e.target.value)} required />
      <input type="text" placeholder="Party ID" onChange={(e) => setPartyId(e.target.value)} required />
      <input type="text" placeholder="Party Image URL" onChange={(e) => setPartyImage(e.target.value)} />
      <button type="submit">Register Party</button>
    </form>
  );
};

export default PartyRegistration;
