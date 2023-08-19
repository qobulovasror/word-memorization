import { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import { createTokenTable } from '../../services/tokenService';
import Login from './login';
import Regis from './regis';

const Auth = ({setToken}) => {
    const [authMeth, setAuthMeth] = useState('login');
    const [initialized, setInitialized] = useState(false);
  
  useEffect( () => {
    if (!initialized) {
      createTokenTable();
      setInitialized(true);
    }

  }, [initialized]);
    return (
        <SafeAreaView style={{paddingTop: 40}}>
            {
                (authMeth=='login')?
                    <Login setAuthMeth={setAuthMeth} setToken={setToken}/>:
                    <Regis setAuthMeth={setAuthMeth} setToken={setToken}/>
            }
        </SafeAreaView>
    );
}

export default Auth;
