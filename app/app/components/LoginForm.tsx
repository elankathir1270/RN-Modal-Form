import React from "react";
import { StyleSheet, Text } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

const LoginForm = () => {
  return (
    <FormContainer>
      <FormInput title="Email" placeholder="example@ds.com" />
      <FormInput title="Password" placeholder="******" />
      <FormSubmitBtn title="Login"></FormSubmitBtn>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
