import React from "react";
import { Hero, About, Work, Projects } from "../components/index"

export default class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center px-80 flex-1">
        <section className="flex flex-row items-center basis-5/12 w-full" id="home">
          <Hero />
        </section>
        <section className="flex flex-grow w-full pt-20 pb-10" id="about">
          <About />
        </section>
        <section className="flex flex-grow w-full py-10" id="work-experience">
          <Work />
        </section>
        <section className="flex flex-grow w-full py-10" id="projects">
          <Projects />
        </section>
      </div>
    );
  }
}
