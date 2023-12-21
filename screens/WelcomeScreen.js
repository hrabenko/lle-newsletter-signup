import * as React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.image} resizeMode="contain" source={require("../assets/little-lemon-logo.png")} />
        <Text style={styles.text}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => {
          navigation.navigate("Subscribe");
        }}>
          <Text style={styles.buttonText}>
            Newsletter
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    height: '100%',
    alignItems: "center",
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    width: 250,
    textAlign: "center",
    marginTop: 60,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#495E57",
    marginBottom: 10,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: '100%'
  },
  buttonText: {
    color: "#EDEFEE",
    textAlign: "center",
  },
});
