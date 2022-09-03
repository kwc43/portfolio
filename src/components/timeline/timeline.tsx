import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const calendarIconDefinition: IconProp = ["fas", "calendar-week"];

export default class Timeline extends React.Component<any> {
  render() {
    return (
      <ol className="flex flex-row items-center">
        {this.props.items.map((item: any, index: number) => (
          <li className="relative" key={index}>
            <div className="flex items-center">
              <div className="w-2 bg-slate-400 dark:bg-slate-600 h-0.5 mr-1"></div>
              <div className="flex justify-center items-center w-6 h-6 rounded-full shrink-0 text-stone-400 dark:text-slate-600">
                <FontAwesomeIcon icon={calendarIconDefinition} />
              </div>
              <div className="w-full bg-slate-400 dark:bg-slate-600 h-0.5 ml-1"></div>
            </div>
            <div className="flex flex-col mt-3 pr-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-slate-600">
                {item.duration}
              </time>
              <p className="text-base font-normal">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    );
  }
}
