import MyHobbyFunction from './components/MyHobbyFunction'
import MyHobbyClass from './components/MyHobbyClass'
import React from 'react'
function App() {
  return (
    <div className="App">
      <header
        className="App-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <MyHobbyFunction />
        <MyHobbyClass />
      </header>
    </div>
  )
}

export default App
