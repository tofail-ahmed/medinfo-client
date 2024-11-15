import React from 'react';

const TextDisplay = ({ text }) => {
  return (
    <div className='bg-green-400 p-2'>
      <h3>Displayed Text:</h3>
      <p>{text}</p>
    </div>
  );
};

export default TextDisplay;
