import { useState } from 'react';
import Filters from './Filters';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-layout">
      <Filters />
      <div className="main-content">
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
    </div>
  );
}

export default App;
