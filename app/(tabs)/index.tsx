import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import FormHeader from "../app/components/FormHeader";
import FormSelectorBtn from "../app/components/FormSelectorBtn";
import LoginForm from "../app/components/LoginForm";
import SignupForm from "../app/components/SignupForm";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, paddingTop: 120 }}>
      <View style={{ height: 80 }}>
        <FormHeader
          leftHeading="Welcome "
          rightHeading="Back"
          subHeading="Task Manager"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectorBtn
          title="Login"
          style={styles.borderLeft}
          backgroundColor="rgba(27,27,51,1)"
        />
        <FormSelectorBtn
          title="Signup"
          style={styles.borderRight}
          backgroundColor="rgba(27,27,51,0.4)"
        />
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <LoginForm />
        <ScrollView>
          <SignupForm />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
});
