import { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import './App.css';

const Login = lazy(()=>import('./pages/auth/login'));
const Regis = lazy(()=>import('./pages/auth/regis'));
const Home = lazy(()=>import('./pages/main/home'))

function App() {
  const [userToken, setUserToken] = useState(window.localStorage.getItem('userAuthToken'));
  return (
    <Suspense 
      fallback={
        <div class="m-5 d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        }>
        <BrowserRouter>
          <Routes>
            <Route 
              path='/' 
              element={
                (!userToken)?
                  <Home  setUserToken={setUserToken} userToken={userToken}/> :
                  <Navigate replace to="/login"/>
              }
              />
              <Route path='/login' element={<Login setUserToken={setUserToken}/>} />
              <Route path='/regis' element={<Regis setUserToken={setUserToken}/>} />
          </Routes>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
