import React, { Component } from "react";
import { View, Text } from "react-native";
import Realm from "realm";

export default class NextScren extends Component {
  constructor(props) {
    super(props);
    this.state = { realm: null };
  }
  componentWillMount() {
    Realm.open({
      schema: [
        {
          name: "Macka",
          properties: {
            name: "string"
          }
        }
      ]
    }).then(realm => {
      realm.write(() => {
        realm.deleteAll();
      });
      this.setState({ realm });
    });
  }
  render() {
    const info = this.state.realm
      ? `Number of dogs in this Realm: ${this.state.realm.objects("Macka")
          .length}`
      : "Loading...";
    console.log("Info: ", info);
    return (
      <View>
        <Text>Welcome to next screen</Text>
      </View>
    );
  }
}
