import * as React from "react";
import { Image, Text, StyleSheet, Pressable, TextInput, View, Alert } from "react-native";
import { validateEmail } from "../utils/index";

const SubscribeScreen = () => {
  const [email, onChangeEmail] = React.useState("");

  const pressSubscribe = () => {
    Alert.alert("","Thanks for subscribing, stay tuned!", [{text: 'OK'}])
    onChangeEmail('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image resizeMode={"contain"} style={styles.image} source={require("../assets/little-lemon-logo-grey.png")} />
      </View>
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput style={styles.input} placeholder={"Type your email"} value={email}
                 onChangeText={onChangeEmail}
                 secureTextEntry={true}
                 keyboardType={"email-address"} />
      <Pressable
        style={[styles.button, { backgroundColor: validateEmail(email) ? "#495E57" : "#878787" }]}
        disabled={!validateEmail(email)} onPress={pressSubscribe}
      >
        <Text style={styles.buttonText}>
          Subscribe
        </Text>
      </Pressable>
    </View>
  );
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
    // justifyContent: "center",
    // alignItems: 'center',
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40
  },
  image: {
    width: 150,
    height: 150
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    marginHorizontal: 20
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: "#000000",
    borderRadius: 7
  },
  button: {
    marginHorizontal: 20,
    height: 40,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "#EDEFEE",
    textAlign: "center"
  }
});