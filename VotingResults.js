import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VotingResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get('/api/results')
      .then(response => {
        setResults(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching results!', error);
      });
  }, []);

  return (
    <div>
      <h2>Voting Results</h2>
      <table>
        <thead>
          <tr>
            <th>Party Name</th>
            <th>EV ID</th>
            <th>Voting ID</th>
            <th>Polled On</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr key={index}>
              <td>{result.partyName}</td>
              <td>{result.evId}</td>
              <td>{result.votingId}</td>
              <td>{new Date(result.polledOn).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VotingResults;
