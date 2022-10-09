import * as React from "react";
import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Alert,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Buttonn } from "./Components/Buttonn";
import { useState } from "react";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        color="blue"
      />
      <Text></Text>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        color="black"
      />
      <Text></Text>
      <Button
        title="Forgot password"
        onPress={() => navigation.navigate("ForgotPassword")}
        color="lightcoral"
      />
    </View>
  );
}
function Login({ navigation }) {
  const [Account, setAccount] = useState("");
  const [Password, setPassword] = useState("");
  const handleClick = () => {
    if (Account && Password) {
      return navigation.navigate("HomePage");
    } else {
      Alert.alert("Enter username and password");
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#333" }}>
      <TextInput
        onChangeText={setAccount}
        placeholder="UserName"
        style={styles.input}
        value={Account}
      />
      <TextInput
        onChangeText={setPassword}
        placeholder="PassWord"
        style={styles.input}
        value={Password}
      />
      <Buttonn callback={handleClick}>Login</Buttonn>
    </View>
  );
}
function Register() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="UserName" style={styles.input} />
      <TextInput placeholder="PassWord" style={styles.input} />
      <TextInput placeholder="Re enter password" style={styles.input} />
      <Buttonn>Register</Buttonn>
    </View>
  );
}
function ForgotPassword() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput placeholder="Enter Username" style={styles.input} />
      <Buttonn>Get password</Buttonn>
    </View>
  );
}
function AfterLogin() {
  return (
    <ImageBackground
      source={require("./img/anhnen.jpg")}
      style={{ flex: 1, width: "100%", height: "100%" }}
    ></ImageBackground>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={AfterLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 0,
    paddingLeft: 50,
    borderRadius: 50,
    backgroundColor: "white",
  },
  btn: {
    width: "70%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dddddd",
    flexDirection: "column",
  },
});

export default App;