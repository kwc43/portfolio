import React from "react";
import "./App.css";
import Header from "./components/header";
import Avatar from "./components/avatar";
import About from "./components/about";
import Footer from "./components/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMoon,
  faSun,
  faBars,
  faTimes,
  faEnvelope,
  faFile,
  faCircleQuestion,
  faBriefcase,
  faCalendarWeek,
  faBook,
  faPeopleGroup
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Hero from "./components/hero";
import Work from "./components/work";
import Projects from "./components/projects";
import Testimonial from "./components/testimonial";

library.add(
  faMoon,
  faSun,
  faBars,
  faTimes,
  faEnvelope,
  faFile,
  faCircleQuestion,
  faBriefcase,
  faCalendarWeek,
  faBook,
  faPeopleGroup,
  faGithub,
  faLinkedin
);

export default class App extends React.Component {
  render() {
    return (
      <div className="font-mono bg-stone-700 text-slate-200 dark:bg-orange-200 dark:text-slate-900">
        <Header />
        <div className="flex flex-col items-center px-80 w-screen min-h-screen mt-12">
          <div className="flex flex-row items-center basis-5/12 w-full py-10">
            <Hero />
          </div>
          <div className="flex flex-grow w-full pt-20 pb-10">
            <About />
          </div>
          <div className="flex flex-grow w-full py-10">
            <Work />
          </div>
          <div className="flex flex-grow w-full py-10">
            <Projects />
          </div>
          {/* <div className="flex flex-grow w-full py-10">
            <Testimonial />
          </div> */}
        </div>
        <Footer />
      </div>
    );
  }
}