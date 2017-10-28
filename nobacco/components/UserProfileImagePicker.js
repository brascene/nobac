import React, { Component } from "react";
import { View, Button, Image } from "react-native";
import ImagePicker from "react-native-image-picker";

export default class UserProfileImagePicker extends Component {
  state = {
    profileSource: null,
    imageUri: ""
  };
  selectImage = () => {
    const options = {
      title: "Select Profile Photo",
      customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    ImagePicker.showImagePicker(options, imageResponse => {
      console.log("Response = ", imageResponse);

      if (imageResponse.didCancel) {
        console.log("User cancelled image picker");
      } else if (imageResponse.error) {
        console.log("ImagePicker Error: ", imageResponse.error);
      } else if (imageResponse.customButton) {
        console.log("User tapped custom button: ", imageResponse.customButton);
      } else {
        const source = { uri: imageResponse.uri };
        this.setState({ imageUri: source.uri, profileSource: source });
      }
    });
  };
  render() {
    return (
      <View
        style={{
          height: 150,
          width: 150,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Image
          source={this.state.profileSource}
          style={{ width: 80, height: 80 }}
        />
        <Button title="Select image" onPress={this.selectImage} />
      </View>
    );
  }
}
