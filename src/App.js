import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import store from "./redux/store";
import AppRouter from "./ui/views/AppRouter";
import { ThemeProvider } from "styled-components";

const theme = {
  primaryColor: {
    dark: "#00334e",
    light: "#145374",
  },
  secondaryColor: {
    dark: "#5588a3",
    light: "#e8e8e8",
  },
  textColor: {
    dark: "#a5a5a5",
    light: "#f1f1f1"
  }
};

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
