import React, { useState } from 'react';
import axios from 'axios';

const VotingForm = () => {
  const [partyName, setPartyName] = useState('');
  const [evId, setEvId] = useState('');
  const [votingId, setVotingId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/votes', { partyName, evId, votingId, polledOn: new Date() })
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
      <h2>Vote</h2>
      <input type="text" placeholder="Party Name" onChange={(e) => setPartyName(e.target.value)} required />
      <input type="text" placeholder="EV ID" onChange={(e) => setEvId(e.target.value)} required />
      <input type="text" placeholder="Voting ID" onChange={(e) => setVotingId(e.target.value)} required />
      <button type="submit">Submit Vote</button>
    </form>
  );
};

export default VotingForm;
