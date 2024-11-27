import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View, Text } from "react-native";

const formSelectorBtn = ({ title, style, backgroundColor, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 16,
  },
});

export default formSelectorBtn;
