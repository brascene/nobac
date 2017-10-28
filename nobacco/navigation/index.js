import { StackNavigator } from "react-navigation";
import CreateProfileForm from "../components/CreateProfileForm";
import NextScreen from "../components/NextScreen";

const RootNavigator = StackNavigator(
  {
    CreateProfile: {
      screen: CreateProfileForm
    },
    NextScreen: {
      screen: NextScreen,
      navigationOptions: {
        headerTitle: "NextScreen"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

export default RootNavigator;
