import React from 'react'
import { Header } from './components/header/Header'
import Headline from './components/headline/Headline'

import 'materialize-css'

const tempArr = [
  {
    fName: 'Joe',
    age: 24,
    onlineStatus: true,
  },
]

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Headline
          header="Posts"
          desc="Click button to see posts"
          tempArr={tempArr}
        />
      </main>
    </div>
  )
}

export default App
