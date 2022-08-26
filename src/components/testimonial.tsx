import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const peopleGroupIconDefinition: IconProp = ["fas", "people-group"];

export default class Testimonial extends React.Component {
  render() {
    return (
      <div className="flex flex-col text-white font-mono">
        <div className="flex flex-row items-center space-x-2">
          <FontAwesomeIcon icon={peopleGroupIconDefinition} />
          <h1 className="text-2xl">Testimonials</h1>
        </div>
        <div className="flex pt-5">
        </div>
      </div>
    );
  }
}
