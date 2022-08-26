import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IHeaderProps {}

interface IHeaderState {
  isNavBarOpen?: boolean;
  isDarkMode?: boolean;
}

const moonIconDefinition: IconProp = ["fas", "moon"];
const sunIconDefinition: IconProp = ["fas", "sun"];
const hamburgerBarDefinition: IconProp = ["fas", "bars"];
const timesDefinition: IconProp = ["fas", "times"];

export default class Header extends React.Component<
  IHeaderProps,
  IHeaderState
> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = { isDarkMode: true, isNavBarOpen: false };

    this.toggleDarkMode = this.toggleDarkMode.bind(this);
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  toggleDarkMode() {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");      
      localStorage.theme = 'light'
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = 'dark'
    }
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  }

  toggleNavBar() {
    this.setState((prevState) => ({
      isNavBarOpen: !prevState.isNavBarOpen,
    }));
  }

  render() {
    return (
      <header className="bg-stone-800 fixed w-full top-0 z-10 dark:bg-orange-300">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="inline-flex items-center justify-between space-x-2">
            <FontAwesomeIcon
              className="fa-lg"
              icon={
                document.documentElement.classList.contains("dark") ? moonIconDefinition : sunIconDefinition
              }
            />
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                id="light-toggle"
                className="sr-only peer"
                onClick={this.toggleDarkMode}
              />
              <div className="w-9 h-5 bg-stone-200 rounded-full peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-stone-600 peer-checked:bg-orange-600"></div>
            </label>
          </div>
          <div>
            <button
              className="block focus:outline-none cursor-pointer"
              onClick={this.toggleNavBar}
            >
              <FontAwesomeIcon
                className="fa-lg"
                icon={
                  this.state.isNavBarOpen
                    ? timesDefinition
                    : hamburgerBarDefinition
                }
                inverse={this.state.isDarkMode}
              />
            </button>
          </div>
        </div>
        <div className={this.state.isNavBarOpen ? "px-2 pt-2 pb-4 text-white font-semibold dark:text-black" : "hidden"}>
          <a
            href="#TBD"
            className="block px-2 py-1 rounded hover:bg-stone-900 dark:hover:bg-orange-400"
          >
            Home
          </a>
          <a
            href="#TBD"
            className="mt-1 block px-2 py-1 rounded hover:bg-stone-900 dark:hover:bg-orange-400"
          >
            About
          </a>
        </div>
      </header>
    );
  }
}
