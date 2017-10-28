/**
 * NoBacco
 * https://github.com/brascene/nobac/tree/master/nobacco
 * @flow
 */

import React, { Component } from "react";
import t from "tcomb-form-native";

const Form = t.form.Form;

type Props = {};

class CreateProfileForm extends Component<Props> {
  loginFormRef: ?Object;

  render() {
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
      <Form
        ref={ref => (this.loginFormRef = ref)}
        type={loginForm}
        options={options}
      />
    );
  }
}
export default CreateProfileForm;
