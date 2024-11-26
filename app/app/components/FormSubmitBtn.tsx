import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const FormSubmitBtn = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ fontSize: 18, color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 8,
    backgroundColor: "rgba(27,27,51,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FormSubmitBtn;
