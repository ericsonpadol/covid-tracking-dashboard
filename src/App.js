import React from "react";
// import PropTypes from "prop-types";
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import MainLayout from "./screens/main";

function App() {
  return (
    <Router>
      <MainLayout />;
    </Router>
  );
}

App.propTypes = {};

export default App;
