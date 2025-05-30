import { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🚀 HackHunt</h1>
        <p>Find and register for top tech hackathons in India</p>

        <input
          type="text"
          placeholder="Search for hackathons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </header>
    </div>
  );
}

export default App;
