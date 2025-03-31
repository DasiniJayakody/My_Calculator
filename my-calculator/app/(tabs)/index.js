import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("0");

  const handlePress = (value) => {
    if (value === "C") {
      setInput("");
      setResult("0");
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "C", "0", "=", "+",
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.result}>{result}</Text>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttonContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity
            key={btn}
            style={[styles.button, btn === "=" && styles.equalsButton]}
            onPress={() => handlePress(btn)}
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  result: {
    fontSize: 48,
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    fontSize: 32,
    color: "#aaa",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "80%",
    justifyContent: "center",
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    backgroundColor: "#444",
    borderRadius: 35,
  },
  equalsButton: {
    backgroundColor: "#ff9800",
  },
  buttonText: {
    fontSize: 28,
    color: "#fff",
  },
});
