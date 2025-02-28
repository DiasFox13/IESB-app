import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function MeuComponente() {
  return (
    <text style={{marginTop: 50, fontSize: 30, color: "white"}}>Olá turma!</text>
  )
}

export default function App() {
  return (
    <View style={{flex: 1 , backgroundColor: "green"}}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
