// App.js

import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="app">
      <div className='upload-overview'>
        <span><b>Upload Overview</b></span>
        <div className='upload-overview-container'>
          <div className='upload-overview-div'>1000</div>
          <div className='upload-overview-div'>2000</div>
          <div className='upload-overview-div'>3000</div>
          <div className='upload-overview-div'>4000</div>
          <div className='upload-overview-div'>5000</div>
        </div>
        </div>
      <div className='record-details'>
        <span><b>Record Details by category</b></span>
        <button className="confirm-button">Confirm/process</button>
      </div>
      <Sidebar onSelectOption={handleOptionSelect} />
      {/* <MainContainer selectedOption={selectedOption} selectedTab='New (0)'/> */}
    </div>
  );
}

export default App;
