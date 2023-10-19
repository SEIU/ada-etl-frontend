import React, { useState } from 'react';

const Sidebar = ({ onSelectOption }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(selectedOption === option ? null : option);
    onSelectOption(option);
  };

  const menuOptions = ['Employer (1000)', 'Employer Organization (345)', 'JOB (124)', 'Member (96)', 'Member Address (530)', 'WORKSITE (1233)'];

  return (
    <div className="sidebar">
      <ul>
        {menuOptions.map((option, index) => (
          <li
            key={index}
            className={`sidebar-item ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
            
              <div className="dropdown-icon">
                <span>&#9660;</span>
              </div>
           
            {selectedOption === option && (
              
              <div className="sub-menu">
                <ul>
                  {/* Define the sub-menu items here */}
                  <li>new records created (0)</li>
                  <li>matched/updated (2)</li>
                  <li>matched/not updated (0)</li>
                  <li><b>error (4)</b></li>
                  <li><b>inconsistent (2)</b></li>
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
