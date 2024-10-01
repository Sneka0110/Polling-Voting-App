import React from 'react';
import VotingForm from './VotingForm';
import PartyRegistration from './PartyRegistration';
import VotingResults from './VotingResults';
import './App.css';


const App = () => {
    return (
        <div>
            <h1>Polling App</h1>
            < VotingForm />
            < PartyRegistration />
            < VotingResults />
        </div>
    );
};

export default App;
