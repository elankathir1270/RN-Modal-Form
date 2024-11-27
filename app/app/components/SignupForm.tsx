import React, { useState } from "react";
import { Text } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import {
  isValidEmail,
  isValidObjectField,
  updateError,
} from "../utils/methods";

const SignupForm = () => {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const { fullName, email, password, confirmPassword } = userInfo;

  const handelOnChangeText = (value: any, fieldName: string) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjectField(userInfo))
      return updateError("Required All Fields!", setError);

    if (!fullName.trim() || fullName.length < 3)
      return updateError("Invalid name!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 6)
      return updateError("Password is les than 6 characters!", setError);

    if (password !== confirmPassword)
      return updateError("Password does not match!", setError);

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
        value={fullName}
        onChangeText={(value) => handelOnChangeText(value, "fullName")}
        label="Fullname"
        placeholder="Suriya"
      />
      <FormInput
        value={email}
        onChangeText={(value) => handelOnChangeText(value, "email")}
        autoCapitalize="none"
        label="Email"
        placeholder="example@ds.com"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handelOnChangeText(value, "password")}
        autoCapitalize="none"
        secureTextEntry
        label="Password"
        placeholder="******"
      />
      <FormInput
        value={confirmPassword}
        onChangeText={(value) => handelOnChangeText(value, "confirmPassword")}
        autoCapitalize="none"
        secureTextEntry
        label="Confirm Password"
        placeholder="******"
      />
      <FormSubmitBtn
        onPress={submitForm}
        title="Signup"
        backgroundColor="rgba(27,27,51,0.4)"
      ></FormSubmitBtn>
    </FormContainer>
  );
};

export default SignupForm;
