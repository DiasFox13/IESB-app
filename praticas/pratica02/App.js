import { StyleSheet,Text, View } from "react-native"

function AppBar(props) {
  return (
  <View style={styles.appBar}>
    <Text style={{ fontSize: 20, fontWeith: "bold", color: "#fff" }}>{props.titulo}</Text>
  </View>
  );
}

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AppBar titulo="Minha Aplicação React Native"/>
      <View style={styles.container}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"},
  appBar: {heigh: 50, backgroundColor: "#333", justifyContent: "center", paddingLeft: 16},
});

export default App;