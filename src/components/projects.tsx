import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Cards from "./cards";

const bookIconDefinition: IconProp = ["fas", "book"];

const projects = [
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default class Projects extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-2 pb-5">
          <FontAwesomeIcon icon={bookIconDefinition} />
          <h1 className="text-2xl">Projects</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <Cards items={projects} />
        </div>
      </div>
    );
  }
}
