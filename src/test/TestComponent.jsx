import React from 'react'
import TextDisplay from './TextDisplay'

const TestComponent = ( {displayText}) => {
  return (
    <div>
      <h1>This is TestComponent</h1>
      <TextDisplay text={displayText}/>
    </div>
  )
}

export default TestComponent