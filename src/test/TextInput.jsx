import React, { useState } from 'react';

const TextInput = ({ onTextChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (typeof onTextChange === 'function') {
      onTextChange(inputValue); // Pass the input value to the parent
    }
    setInputValue(''); // Clear the input after submission
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange} // Track input changes
          placeholder="Type something..."
        />
        <button type="submit">Submit</button> {/* Submit button */}
      </form>
    </div>
  );
};

export default TextInput;
