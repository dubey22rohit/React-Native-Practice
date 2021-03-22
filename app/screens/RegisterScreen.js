import React, { useState } from "react";
import { Formik } from "formik";
import { StyleSheet, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import * as Yup from "yup";
import AppButton from "../components/AppButton";
import Screen from "../components/Screen";
import AppText from "../components/AppText/AppText";
import ErrorMessage from "../components/forms/ErrorMessage";

import { AppFormField, AppForm, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function LoginScreen(props) {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/logo-red.png")} style={styles.logo} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          placeholder="Name"
          icon="account"
          name="name"
          autoCapitalize="none"
        />

        <AppFormField
          placeholder="Email"
          icon="email"
          name="email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
