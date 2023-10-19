// MainContainer.js

import React, { useState } from 'react';

const MainContainer = ({ selectedOption ,selectedTab }) => {
  const tabContent = {
    'New (0)': 'Content Here',
    'Updated (0)': 'Content Here',
    'Existing (0)': 'Content Here',
    'Error (1)': 'Content Here',
    'Inconsistent (6)': 'Content Here',
  };

  return (
    <div className="main-container">
      <h2 className='containerHeader'>{selectedOption}</h2>
      <div className="tabs">
        {Object.keys(tabContent).map((tab, index) => (
          <div key={index} className={`tab ${selectedTab === tab ? 'selected' : ''}`}>
            {tab}
          </div>
        ))}
      </div>
      <div className="content">
        {selectedTab && <div className="content-text">{tabContent[selectedTab]}</div>}
      </div>
    </div>
  );
};

export default MainContainer;
