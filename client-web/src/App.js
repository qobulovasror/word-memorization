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
            {/* <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='create' element={<Login/>}/>
            </Route> */}
            <Route 
              path='/home' 
              element={
                (!userToken)?
                  <Home  setUserToken={setUserToken} userToken={userToken}/> :
                  <Navigate replace to="/login"/>
              }>
                <Route path='add-word' element={<>asdas</>}/>
                <Route path='repeat' element={<></>}/>
                <Route path='test' element={<></>}/>
                <Route path='memorized' element={<></>}/>
                <Route path='all-repeat' element={<></>}/>
                <Route path='make-sentence' element={<></>}/>
                <Route path='chart' element={<></>}/>
                <Route path='translate' element={<></>}/>
                <Route path='find-word-to-sentens' element={<></>}/>
                <Route path='find-word-to-img' element={<></>}/>
                <Route path='user-reting' element={<></>}/>
                <Route path='info' element={<></>}/>
              </Route>
              <Route path='/login' element={<Login setUserToken={setUserToken}/>} />
              <Route path='/regis' element={<Regis setUserToken={setUserToken}/>} />
          </Routes>
        </BrowserRouter>
    </Suspense>
  );
}

export default App;
