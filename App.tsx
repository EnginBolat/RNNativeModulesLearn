import React from "react";
import { Button, StyleSheet, Text, View, } from "react-native";
import { Alert } from "./src/components/alert";

export default function App() {

  function handleShowToast() {
    Alert.showAlert('Samsun Anlık', 'Adalet Mahallesinde Kaza')
  }

  return <View style={styles.container}>
    <Text style={styles.title}>Native Module!</Text>
    <Button title="Show Toast" onPress={handleShowToast} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    marginBottom: 12,
    fontWeight: '700',
    fontSize: 18,
  },
})

