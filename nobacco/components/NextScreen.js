import React, { Component } from "react";
import { View, Text } from "react-native";
import Realm from "realm";
import UserProfile from "../models/UserModel";

export default class NextScren extends Component {
  constructor(props) {
    super(props);
    this.state = {
      realm: null
    };
  }
  componentWillMount() {
    Realm.open({
      schema: [UserProfile]
    }).then(realm => {
      this.setState({ realm });
    });
  }
  render() {
    const { realm } = this.state;
    const currentUser = realm ? realm.objects("UserProfile")[0] : "";
    console.log("Current user in realm: ", currentUser);
    return (
      <View>
        <Text>Welcome to next screen</Text>
      </View>
    );
  }
}
