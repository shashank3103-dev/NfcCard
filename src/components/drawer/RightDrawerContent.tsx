import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const RightDrawerContent = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Right Drawer</Text>
      <TouchableOpacity
        style={styles.option}
        onPress={() => navigation.closeDrawer()}
      >
        <Text>Close Right Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF8DE",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default RightDrawerContent;