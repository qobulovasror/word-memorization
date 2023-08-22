import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import { useEffect, useState } from "react";

import Auth from "./screens/auth/Auth";
import { getToken } from "./services/tokenService";

export default function App() {
  const [token, setToken] = useState('');
  useEffect(()=>{
    if (!token) {
      getToken("wordMemorizationAuthToken")
        .then((data) => {
          setToken(data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }, [])
  return token ? (
    <NavigationContainer>
      <DrawerNavigator  token={token} setToken={setToken} />
    </NavigationContainer>
  ) : (
    <Auth token={token} setToken={setToken} />
  );
}
