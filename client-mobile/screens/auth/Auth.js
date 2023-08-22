import { useEffect, useState } from 'react';
import {SafeAreaView} from 'react-native';
import { createTokenTable } from '../../services/tokenService';
import Login from './login';
import Regis from './regis';
import { createWordTable } from '../../services/wordDBService';

const Auth = ({setToken}) => {
    const [authMeth, setAuthMeth] = useState('login');
    const [initialized, setInitialized] = useState(false);
  
  useEffect( () => {
    if (!initialized) {
      createTokenTable();
      createWordTable();
      setInitialized(true);
    }

  }, [initialized]);
    return (
        <SafeAreaView style={{marginTop: -1}}>
            {
                (authMeth=='login')?
                    <Login setAuthMeth={setAuthMeth} setToken={setToken}/>:
                    <Regis setAuthMeth={setAuthMeth} setToken={setToken}/>
            }
        </SafeAreaView>
    );
}

export default Auth;
