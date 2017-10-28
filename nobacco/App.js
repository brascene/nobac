/**
 * NoBacco
 * https://github.com/brascene/nobac/tree/master/nobacco
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CreateProfileForm from "./components/CreateProfileForm";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to NoBacco!</Text>
        <CreateProfileForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
