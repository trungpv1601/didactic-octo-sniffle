import React from "react";
import globalHook from "use-global-hook";

import { initialState as darkMode, setDarkMode } from "./darkMode";

const initialState = {
  darkMode,
};

const actions = {
  setDarkMode,
};

const useGlobal = globalHook(initialState, actions);
export const connect = (Component) => {
  return (props) => {
    let [globalState, globalActions] = useGlobal();
    let _props = { ...props, globalState, globalActions };
    return <Component {..._props} />;
  };
};

export default useGlobal;
