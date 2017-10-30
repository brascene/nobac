/**
 * NoBacco
 * https://github.com/brascene/nobac/tree/master/nobacco
 * @flow
 */

import React, { Component } from "react";
import { View, Button } from "react-native";
import t from "tcomb-form-native";
import Realm from "realm";
import UserProfileImagePicker from "../components/UserProfileImagePicker";
import UserProfile from "../models/UserModel";

const Form = t.form.Form;

type Props = {
  navigation: Object
};

class CreateProfileForm extends Component<Props> {
  static navigationOptions = {
    title: "Welcome to NoBacco"
  };

  state = {
    firstName: "New user name",
    lastName: "New user last name",
    age: -1,
    userImage: null,
    currentProgress: 1
  };

  loginFormRef: ?Object;

  saveProfile = () => {
    Realm.open({
      schema: [UserProfile]
    }).then(realm => {
      realm.write(() => {
        const {
          firstName,
          lastName,
          age,
          userImage,
          currentProgress
        } = this.state;
        realm.create("UserProfile", {
          firstName,
          lastName,
          age,
          userImage,
          currentProgress
        });
      });
    });
  };

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
        <UserProfileImagePicker />
        <Button title="Next" onPress={() => navigate("NextScreen")} />
        <Button title="Save me" onPress={this.saveProfile} />
      </View>
    );
  }
}
export default CreateProfileForm;
