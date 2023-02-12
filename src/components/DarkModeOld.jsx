import React, { Component } from "react";
import { connect } from "../state/useGlobal";

class DarkModeOld extends Component {
  render() {
    const { globalState, globalActions } = this.props;

    return (
      <div className="mt-4 ">
        <button
          className="text-6xl "
          onClick={() => globalActions.setDarkMode(!globalState.darkMode)}
        >
          {globalState.darkMode ? "🌞" : "🌚"}
        </button>
      </div>
    );
  }
}
export default connect(DarkModeOld);
