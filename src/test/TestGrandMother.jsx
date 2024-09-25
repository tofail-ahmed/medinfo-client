import React, { useState } from 'react';
import ChildTest from './ChildTest';
import TestMother from './TestMother';

const TestGrandMother = () => {
  const [age, setAge] = useState(0); // Initialize age to 0

  return (
    <div>
      <h1>This is TestGrandMother</h1>
      <ChildTest age={age} /> {/* Passing the age to ChildTest */}
      <TestMother age={age} setAge={setAge} /> {/* Passing age and setAge to TestMother */}
    </div>
  );
}

export default TestGrandMother;