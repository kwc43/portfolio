import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Routing from "./utils/routing";
import "./utils/iconlibrary"

export default class App extends React.Component {
  render() {
    return (
      <div className="font-mono bg-stone-700 text-slate-200 dark:bg-orange-200 dark:text-slate-900">
        <Header />
        <div className="w-screen min-h-screen pt-12">
          <Routing/>
        </div>
        <Footer />
      </div>
    );
  }
}
