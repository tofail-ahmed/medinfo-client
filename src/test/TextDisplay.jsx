import React from 'react';

const TextDisplay = ({ text }) => {
  return (
    <div>
      <h3>Displayed Text:</h3>
      <p>{text}</p>
    </div>
  );
};

export default TextDisplay;
