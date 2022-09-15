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
  faPeopleGroup,
  faCopyright,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function IconLibrary() {
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
      faCopyright,
      faGithub,
      faLinkedin
    );
}
