import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/home"
import Error from "../pages/error"

interface Props {}

interface State {}

export default class Routing extends React.Component<Props, State> {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    );
  }
}
