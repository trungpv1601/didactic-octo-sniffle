import React from "react";
import useGlobal from "../state/useGlobal";

export default function DarkMode() {
  const [globalState, globalActions] = useGlobal();

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
