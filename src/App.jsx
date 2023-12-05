import { useState } from 'react'
import './App.css'
import { UserContext } from './context/UserContext'
import Main from './components/Main/Main';

function App() {
  const [username, setUsername] = useState();

  const updateUsername = (newUsername) => {
    setUsername(newUsername);
  };

  const userData = { username, setUsername };

  return (
    <>
      <UserContext.Provider value={{ username, updateUsername }}>
        <Main/>
      </UserContext.Provider>
    </>
  )
}

export default App
