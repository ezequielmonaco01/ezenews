import { Text, StyleSheet, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>S' News</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 15,
  },
});

export default Header;
