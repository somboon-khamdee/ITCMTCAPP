import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Service = () => {
  return (
    <View style={styles.center}>
      <Text>This is the Service Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor:'#ff5555',
  },
});

export default Service;