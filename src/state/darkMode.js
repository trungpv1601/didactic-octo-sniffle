export const initialState = localStorage.getItem("darkMode")
  ? localStorage.getItem("darkMode")
  : false;

export const setDarkMode = (store, darkMode) => {
  store.setState({ darkMode: darkMode }, () =>
    localStorage.setItem("darkMode", darkMode)
  );
};
