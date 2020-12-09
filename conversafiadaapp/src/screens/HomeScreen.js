import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Header } from "../components/common/Header";
import { Button } from "../components/common/Button";
import { Spinner } from "../components/common/Spinner";
import LoginForm from "../components/LoginForm";
import firebase from "firebase";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

class HomeScreen extends Component {
  state = { loggedIn: null };

  UNSAFE_componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBv0uTsHvfHfCvN8C--LE1-02VIkcF6Rjc",
      authDomain: "easyvest-696eb.firebaseapp.com",
      projectId: "easyvest-696eb",
      storageBucket: "easyvest-696eb.appspot.com",
      messagingSenderId: "276404905301",
      appId: "1:276404905301:web:72ec0289c5548268f9bbdc",
      measurementId: "G-9LQG3FXXC5",
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Sair</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Área de Login" />
        <Image style={styles.tinyLogo} source={require("./logo.png")} />
        {this.renderContent()}
      </View>
    );
  }
}

export default HomeScreen;
