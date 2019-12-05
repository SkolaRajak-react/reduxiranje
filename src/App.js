import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Movies from "./components/Movies";
import Users from "./components/Users";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Users />
      </div>
    </Provider>
  );
}

export default App;
