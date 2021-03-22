import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
import LoginScreen from "../screens/LoginScreen"
import RegisterScreen from "../screens/RegisterScreen"
import colors from '../config/colors'
function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell what you don't need</Text>
      </View>
      <View style={styles.authButtons}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("LoginScreen")}
        />
        <AppButton
          title="Register"
          onPress={() => navigation.navigate("RegisterScreen")}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  authButtons: {
    padding: 20,
    width: "100%",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine : {
    fontSize: 25,
    marginVertical : 10
  }
});

export default WelcomeScreen;
