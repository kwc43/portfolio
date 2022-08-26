import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const githubIconDefinition: IconProp = ["fab", "github"];
const linkedInIconDefinition: IconProp = ["fab", "linkedin"];
const envelopeIconDefinition: IconProp = ["fas", "envelope"];
const resumeIconDefinition: IconProp = ["fas", "file"];

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="p-4 mt-auto bg-stone-900 dark:bg-orange-300 shadow flex flex-row-reverse items-center bottom-0">
        <ul className="flex flex-wrap items-center mt-3 text-sm">
          <li>
            <a href="#TBD" className="mr-4 md:mr-6">
              <FontAwesomeIcon icon={githubIconDefinition} />
            </a>
          </li>
          <li>
            <a href="#TBD" className="mr-4 md:mr-6">
              <FontAwesomeIcon icon={linkedInIconDefinition} />
            </a>
          </li>
          <li>
            <a href="#TBD" className="mr-4 md:mr-6">
              <FontAwesomeIcon icon={envelopeIconDefinition} />
            </a>
          </li>
          <li>
            <a href="#TBD" className="md:mr-6">
              <FontAwesomeIcon icon={resumeIconDefinition} />
            </a>
          </li>
        </ul>
      </footer>
    );
  }
}
