import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Cards from "./cards";

const bookIconDefinition: IconProp = ["fas", "book"];

interface ProjectsProp {}

interface ProjectObj {
  id: string;
  name: string;
  description: string;
}

interface ProjectsState {
  projects: ProjectObj[];
}

export default class Projects extends React.Component<
  ProjectsProp,
  ProjectsState
> {
  constructor(props: ProjectsProp) {
    super(props);
    this.state = {
      projects: [],
    };
  }

  componentDidMount(): void {
    this.getProjects();
  }

  private async getProjects() {
    await fetch("https://localhost:7255/api/projects")
      .then((response) => response.json())
      .then((data) => {
        let modified = data.map((obj: any) => {
          return {
            id: obj.id,
            name: obj.projectName,
            description: obj.projectDescription,
          };
        });
        this.setState({ projects: modified });
      });
  }

  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-2 pb-5">
          <FontAwesomeIcon icon={bookIconDefinition} />
          <h1 className="text-2xl">Projects</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <Cards items={this.state.projects} />
        </div>
      </div>
    );
  }
}
