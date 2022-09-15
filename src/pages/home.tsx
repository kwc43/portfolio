import React from "react";
import { Hero, About, Work, Projects } from "../components/index"

export default class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col px-80">
        <section className="flex flex-row items-center w-full pt-10" id="home">
          <Hero />
        </section>
        <section className="flex flex-grow w-full pt-10 pb-10" id="about">
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
