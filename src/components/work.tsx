import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Timeline from "./timeline/timeline";

const workIconDefinition: IconProp = ["fas", "briefcase"];

const workExps = [
  {
    name: "Lorem Ipsum",
    duration:"XX/XXXX - XX/XXXX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum",
    duration:"XX/XXXX - XX/XXXX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum",
    duration:"XX/XXXX - XX/XXXX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Lorem Ipsum",
    duration:"XX/XXXX - XX/XXXX",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default class Work extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-2 pb-5">
          <FontAwesomeIcon icon={workIconDefinition} />
          <h1 className="text-2xl">Work Experience</h1>
        </div>
        <Timeline items={workExps}/>
      </div>
    );
  }
}
