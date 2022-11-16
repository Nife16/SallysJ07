import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import PageWrapper from './components/reusables/PageWrapper';


function App() {

  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const email = localStorage.getItem("email")
    if (email !== null) {
      axios.get(`http://localhost:8080/getUserByEmail/${email}`)
        .then((response) => {
          setUser(response.data)
          setIsLoading(false)
        })
        .catch((e) => {
          console.log(e)
          setIsLoading(false)
        })
    }
  }, [])

  return (
    <PageWrapper user={user} setUser={setUser}>
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp user={user} />} />
        <Route path="/sign-in" element={<SignIn user={user} setUser={setUser} isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </PageWrapper>
  );
}

export default App;
