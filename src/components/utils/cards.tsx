import React from "react";
import { Link } from "react-router-dom";
interface AbstractCardItem {
  id: string;
  name: string;
  description: string;
}

interface CardsProp<T> {
  items: T[],
  parent: string
}

export default class Cards<T extends AbstractCardItem> extends React.Component<
  CardsProp<T>
> {
  render() {
    return this.props.items.map((item: T) => (
      <div className="w-1/2" key={item.id}>
        <Link
          to={"/projects/" + item.id}
          className="flex flex-row w-full h-full p-3 items-center rounded-lg shadow-md hover:bg-stone-900 dark:hover:bg-orange-300"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {item.name}
            </h5>
            <p className="mb-3 font-normal">{item.description}</p>
          </div>
        </Link>
      </div>
    ));
  }
}