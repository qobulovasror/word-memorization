import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigators/DrawerNavigator";
import { useEffect, useState } from "react";

import {
  createTokenTable,
  getToken,
  storeToken,
} from "./services/tokenService";

export default function App() {
  const [initialized, setInitialized] = useState(false);
  const getTokenFromBackend = async () =>{
    try {
      const res = await fetch('url');
      res.json().then(data=>{
        console.log(data);
        return data;
      })
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }
  useEffect( async () => {
    if (!initialized) {
      createTokenTable();
      setInitialized(true);
    }

    let token = await getTokenFromBackend()
    // Store a token
    storeToken("wordMemorizationAuthToken", token);

    // Retrieve a token
    getToken("wordMemorizationAuthToken")
      .then((token) => {
        if (token) {
          console.log("Token retrieved:", token);
        } else {
          console.log("Token not found");
        }
      })
      .catch((error) => {
        console.log("Error retrieving token:", error);
      });

    // Other code here
  }, [initialized]);
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
