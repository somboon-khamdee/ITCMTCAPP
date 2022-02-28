import React from "react";
import { View, StyleSheet, Text } from "react-native";

const About = () => {
  return (
    <View style={styles.center}>
      <Text>This is the About Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:'#fff555',
  },
});

export default About;