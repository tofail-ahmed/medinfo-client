import React from 'react';

const ChildTest = ({ age }) => {
  return (
    <div className='bg-blue-400 p-2'>
      <h1>{age} welcome</h1> {/* Displays the updated age */}
    </div>
  );
}

export default ChildTest;