import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Pressable } from "react-native";

const MultiInputDemo = () => {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    password: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData({
      username: "",
      name: "",
      password: "",
    });
    setSubmittedData(null);
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={formData.username}
        onChangeText={(text) => handleChange("username", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleChange("name", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Pressable onPress={handleSubmit} style={styles.press}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        <Pressable onPress={handleReset} style={styles.press}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>
      </View>

      {submittedData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Username: {submittedData.username}</Text>
          <Text style={styles.resultText}>Password: {submittedData.password}</Text>
          <Text style={styles.resultText}>Name: {submittedData.name}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  resultText: {
    fontSize: 16,
    marginBottom: 5,
  },
  press: {
    height: 50,
    width: 150,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "darkblue",
  },
});

export default MultiInputDemo;
