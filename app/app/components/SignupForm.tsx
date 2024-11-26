import React from "react";
import { Text } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";

const SignupForm = () => {
  return (
    <FormContainer>
      <FormInput title="Fullname" placeholder="Srk" />
      <FormInput title="Email" placeholder="example@ds.com" />
      <FormInput title="Password" placeholder="******" />
      <FormInput title="Confirm Password" placeholder="******" />
      <FormSubmitBtn title="Signup"></FormSubmitBtn>
    </FormContainer>
  );
};

export default SignupForm;
