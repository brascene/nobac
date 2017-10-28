/**
 * NoBacco
 * https://github.com/brascene/nobac/tree/master/nobacco
 * @flow
 */

import React, { Component } from "react";
import { View, Button } from "react-native";
import t from "tcomb-form-native";

const Form = t.form.Form;

type Props = {
  navigation: Object
};

class CreateProfileForm extends Component<Props> {
  static navigationOptions = {
    title: "Welcome to NoBacco"
  };
  loginFormRef: ?Object;
  render() {
    const { navigate } = this.props.navigation;
    const username = {
      label: "First name",
      maxLength: 12,
      placeholder: "Enter your first name"
    };

    const email = {
      label: "Last name",
      placeholder: "Enter your last name"
    };

    const password = {
      label: "Age",
      keyboardType: "number-pad",
      placeholder: "Enter your age"
    };

    const loginForm = t.struct({
      username: t.String,
      email: t.String,
      password: t.String
    });

    const options = {
      fields: {
        username,
        email,
        password
      }
    };

    return (
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Form
          ref={ref => (this.loginFormRef = ref)}
          type={loginForm}
          options={options}
        />
        <Button title="Next" onPress={() => navigate("NextScreen")} />
      </View>
    );
  }
}
export default CreateProfileForm;
