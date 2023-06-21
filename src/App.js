import { persist } from "./store/store";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import "./assets/css/w3.css";
import "./index.css";
import "./assets/css/chat.css";
import "./assets/css/boostrap.min.css";
import "./assets/css/ckeditor.css";
import "./assets/css/feather.css";
import "./assets/css/style.css";
import router from "./router/router";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ScrolltoTop from "./hooks/scrolltoTop";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00329B",
      textInput: "#F2D9E7",
    },
  },
  typography: {
    fontFamily: "Poppins",
    color: "#272b41",
  },
});

export const baseURL = `https://api.gettheskydoctors.com/api/v1`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
        <ThemeProvider theme={theme}>
          <Toaster position="top-right" reverseOrder={false} />
          <RouterProvider router={router}>
            <ToastContainer />
            <ScrolltoTop />
          </RouterProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
