import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import QuizProvider from "./Context/QuizContext";
import AuthProvider from "./Context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <QuizProvider>
        <Router>
          <App />
        </Router>
      </QuizProvider>
    </AuthProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
