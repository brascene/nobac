/**
 * NoBacco
 * https://github.com/brascene/nobac/tree/master/nobacco
 * @flow
 */

import React, { Component } from "react";
import RootNavigator from "./navigation";

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <RootNavigator />;
  }
}
