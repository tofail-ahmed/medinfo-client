import React from 'react';

const TestMother = ({ age, setAge }) => {
  const handleAge = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setAge(event.target.value); // Update age on input change
  };
  console.log(age)

  return (
    <div className="bg-red-200 p-2">
      {/* <h1>{age} welcome</h1> */}
      <form onSubmit={handleAge}>
        <input 
          type="text" 
          value={age} // Provide a default value if age is undefined
          onChange={handleChange} 
        />
        <button className='bg-green-300' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default TestMother;