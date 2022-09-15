import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const calendarIconDefinition: IconProp = ["fas", "calendar-week"];

interface AbstractTimelineItem {
  id: string,
  name: string,
  description: string
  start: Date,
  end: Date
}

interface TimelineProp<T> {
  items: T[]
}

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export default class Timeline<T extends AbstractTimelineItem> extends React.Component<TimelineProp<T>> {
  
  render() {
    return (
      <ol className="flex flex-row overflow-x-auto">
        {this.props.items.map((item: any, index: number) => (
          <li className="relative flex-none w-1/3 mb-12" key={index}>
            <div className="flex items-center flex-auto">
              <div className="w-2 bg-slate-400 dark:bg-slate-600 h-0.5 mr-1"></div>
              <div className="flex justify-center items-center w-6 h-6 rounded-full shrink-0 text-stone-400 dark:text-slate-600">
                <FontAwesomeIcon icon={calendarIconDefinition} />
              </div>
              <div className="w-full bg-slate-400 dark:bg-slate-600 h-0.5 ml-1"></div>
            </div>
            <div className="flex flex-col mt-3 pr-4">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-stone-400 dark:text-slate-600">
                {month[item.start.getMonth() - 1] + ", " + item.start.getFullYear()} - { item.end.getFullYear() === 1999 ? "Present" : 
                month[item.end.getMonth() - 1] + ", " + item.end.getFullYear()}
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
