import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FormHeader = ({ leftHeading, rightHeading, subHeading }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{leftHeading} </Text>
        <Text style={styles.heading}>{rightHeading}</Text>
      </View>
      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "midnightblue",
  },
  subHeading: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },
});

export default FormHeader;
