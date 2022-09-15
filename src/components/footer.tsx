import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

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
            <Link to="" onClick={() => window.open("https://github.com/kwc43/", "_blank")}className="mr-4 md:mr-6">
              <FontAwesomeIcon icon={githubIconDefinition} />
            </Link>
          </li>
          <li>
            <Link to="" onClick = {() => window.open("https://www.linkedin.com/in/khang-woei-chan-b48b23171/", "_blank")} className="mr-4 md:mr-6">
              <FontAwesomeIcon icon={linkedInIconDefinition} />
            </Link>
          </li>
          <li>
            <Link to="" onClick={() => window.location.href = "mailto:ckhangwoei@gmaiil.com"} className="mr-4 md:mr-6">
              <FontAwesomeIcon icon={envelopeIconDefinition} />
            </Link>
          </li>
          <li>
            <Link to="/resume.pdf" target = "_blank" className="mr-4 md:mr-6" rel="noopener noreferrer" download>
              <FontAwesomeIcon icon={resumeIconDefinition} />
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}