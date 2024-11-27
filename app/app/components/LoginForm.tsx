import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import {
  isValidEmail,
  isValidObjectField,
  updateError,
} from "../utils/methods";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handelOnChangeText = (value: any, fieldName: string) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjectField(userInfo))
      return updateError("Required All Fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 6)
      return updateError("Password is les than 6 characters!", setError);

    return true;
  };
  const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo);
    }
  };
  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        label="Email"
        value={email}
        onChangeText={(value) => handelOnChangeText(value, "email")}
        autoCapitalize="none"
        secureTextEntry
        placeholder="example@ds.com"
      />
      <FormInput
        label="Password"
        value={password}
        onChangeText={(value) => handelOnChangeText(value, "password")}
        autoCapitalize="none"
        secureTextEntry
        placeholder="******"
      />
      <FormSubmitBtn
        onPress={submitForm}
        title="Login"
        backgroundColor="rgba(27,27,51,1)"
      ></FormSubmitBtn>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
