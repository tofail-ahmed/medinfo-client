import  { useState } from 'react';

import TextInput from "./TextInput";
import TestComponent from './TestComponent';
import TextDisplay from './TextDisplay';

const Test = () => {
  const [displayText, setDisplayText] = useState('');

  const handleTextChange = (text) => {
    setDisplayText(text);
  };

  return (
    <div className='bg-orange-400 p-2'>
      <TextInput onTextChange={handleTextChange} />
      <h1>This is Test</h1>
      <TestComponent displayText={displayText} />
      <TextDisplay text={displayText} />
    </div>
  );
}

export default Test;
