import React from "react";

export default class Cards extends React.Component<any> {
  render() {
    return this.props.items.map((item: any, index:number) => (
      <div className="w-1/2">
        <a
          href="#tbd"
          className="flex flex-row w-full h-full p-3 items-center rounded-lg shadow-md hover:bg-stone-900 dark:hover:bg-orange-300"
          key={index}
        >
          {/* <img
        className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/docs/images/blog/image-4.jpg"
        alt=""
      /> */}
          <div className="flex w-3/4 h-full rounded-lg bg-stone-600" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {item.name}
            </h5>
            <p className="mb-3 font-normal">{item.description}</p>
          </div>
        </a>
      </div>
    ));
  }
}
