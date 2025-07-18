import { Image } from "expo-image";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.constainer}>
      <Text style={styles.heading}>
        Edit app/index.tsx to edit this screen.
      </Text>
      <Link href={"/about"}>About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "purple",
  },

  heading: {
    fontSize: 20,
    color: "green"
  }
});
