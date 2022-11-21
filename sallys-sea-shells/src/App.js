import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PageWrapper from './components/reusables/PageWrapper'; 
import  { getUserByEmail } from './makeRequest'


function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const email = localStorage.getItem("email")
    if (email !== null) {
      const user = getUserByEmail(email)
      if(user.id !== undefined) {
        setUser(user)
      } else {
        setIsLoading(false)
      }
    }
  }, [])

  return (
    <PageWrapper u ser={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp user={user} />} />
        <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
