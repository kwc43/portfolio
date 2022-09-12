import React from "react";
import "./App.css";
import { Header, Footer } from "./components/index";
import { IconLibrary, Routing } from "./utils/index";


interface AppProps {
  
}

interface AppState {

}

export default class App extends React.Component<AppProps, AppState> {

  constructor(props:AppProps) {
    super(props);
    IconLibrary();
  }

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
