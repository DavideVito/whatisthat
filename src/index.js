import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyClIgRz9RHZsuk4H4iSah-w2eeIilewnl0",
  authDomain: "castiwhatisthat.firebaseapp.com",
  projectId: "castiwhatisthat",
  storageBucket: "castiwhatisthat.appspot.com",
  messagingSenderId: "1009096928457",
  appId: "1:1009096928457:web:1129db3dd3e445eaea3118",
  measurementId: "G-RTKG1LCEZD",
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
