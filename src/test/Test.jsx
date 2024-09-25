import React from 'react'
import ChildTest from './ChildTest'
import TestMother from './TestMother'

const Test = () => {
  return (
    <div>
        <TestMother/>
      <h1>This is Test</h1>
    
      <ChildTest/>
    </div>
  )
}

export default Test