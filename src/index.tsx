import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import QuizProvider from "./Context/QuizContext";
import AuthProvider from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <AuthProvider>
      <QuizProvider>
          <App />
      </QuizProvider>
    </AuthProvider>
    </Router>

    ,
  </React.StrictMode>,
  document.getElementById("root")
);
