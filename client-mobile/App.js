import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import { useEffect, useState } from "react";
import { View } from "react-native";

import Auth from "./screens/auth/Auth";
import { getToken } from "./services/tokenService";
// import { TokenContextProvider, useTokenContext } from "./services/context";
// import { TokenContextProvider, useTokenContext } from "./services/context";

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
