import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Avatar from "./avatar";

const aboutIconDefinition: IconProp = ["fas", "circle-question"];

export default class About extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex items-center justify-center w-full h-32">
          <Avatar />
        </div>
        <div className="flex flex-row items-center space-x-2 pt-16">
          <FontAwesomeIcon icon={aboutIconDefinition} />
          <h1 className="text-2xl">About</h1>
        </div>
        <div className="flex pt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    );
  }
}
