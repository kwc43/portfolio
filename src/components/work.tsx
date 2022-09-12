import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Timeline from "./timeline";

const workIconDefinition: IconProp = ["fas", "briefcase"];

interface WorkProp {}

interface WorkObj {
  id: string;
  name: string;
  description: string;
  start: Date;
  end: Date;
}

interface WorkState {
  work: WorkObj[];
}

export default class Work extends React.Component<WorkProp, WorkState> {
  constructor(props: WorkProp) {
    super(props);
    this.state = {
      work: [],
    };
  }

  componentDidMount(): void {
    this.getWorkExperience();
  }

  private async getWorkExperience() {
    await fetch("https://localhost:7255/api/work")
      .then((response) => response.json())
      .then((data) => {
        let modified = data.map((obj: any) => {
          return {
            id: obj.id,
            name: obj.companyName,
            description: obj.workDescription,
            start: this.parseISOString(obj.workStart),
            end: this.parseISOString(obj.workEnd),
          };
        });
        this.setState({ work: modified });
      });
  }

  parseISOString(input: string) {
    var temp = input.split(/\D+/).map((item) => {
      return parseInt(item);
    });

    return new Date(
      Date.UTC(temp[0], temp[1], temp[2], temp[3], temp[4], temp[5])
    );
  }

  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-2 pb-5">
          <FontAwesomeIcon icon={workIconDefinition} />
          <h1 className="text-2xl">Work Experience</h1>
        </div>
        <Timeline items={this.state.work} />
      </div>
    );
  }
}
