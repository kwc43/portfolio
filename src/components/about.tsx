import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const aboutIconDefinition: IconProp = ["fas", "circle-question"];
const copyRightIconDefinition: IconProp = ["fas", "copyright"];

export default class About extends React.Component {
  render() {
    return (
      <div className="flex flex-col">
        <div className="flex flex-row items-center space-x-2 pt-5 flex-end">
          <FontAwesomeIcon icon={aboutIconDefinition} />
          <h1 className="text-2xl">About</h1>
        </div>
        <p className="flex pt-5">
          Hi! I'm Khang, a UK based software engineer/developer with some
          experieince in web development, embeded systems, and data analysis
          skilled. Due to the nature of my work, I currently use C++, Python,
          and C depending on the project. This website is hosted on
          Azure and is built using a React, Typescript front-end, with C#, .NET 6
          middleware, and MongoDB database. There's some CI/CD going on using
          Docker, 'Github Actions' and 'Webhooks' more details on that later.
          The site's still a work in progress and there's lots to do, if it gives you a minimalistic
          vibe, great! Cause that's totally what I was going for, not because I
          have a horrible eye for design or anything.  (・ε・) …
        </p>
        <br/>
        <p className="flex pt-5">
          Quick note about the model, it's called &nbsp;
          <a className="underline underline-offset-4 decoration-sky-500 text-sky-500 dark:decoration-sky-700 dark:text-blue-700" target="_blank"  rel="noreferrer" href="https://sketchfab.com/3d-models/wooden-fox-kit-figure-0391c2c8088c4db3924708e9a9c2bcd2">"Wooden Fox Kit Figure"</a> &nbsp; 
          by &nbsp; 
          <a className="underline underline-offset-4 decoration-sky-500 text-sky-500 dark:decoration-sky-700 dark:text-blue-700" target="_blank"  rel="noreferrer" href="https://sketchfab.com/yogensia">Yogensia</a> &nbsp;
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><FontAwesomeIcon className="fa-xs" icon={copyRightIconDefinition} /></a>
          , loaded using Threejs.
        </p>
      </div>
    );
  }
}
