import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

const FormInput = ({ title, placeholder }) => {
  return (
    <>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <TextInput placeholder={placeholder} style={styles.textInput}></TextInput>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 45,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 15,
  },
});

export default FormInput;
