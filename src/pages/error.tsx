import React from "react";
import travolta from "../assets/confused_travolta.gif";
import { Link } from "react-router-dom";

interface Props {}

interface State {}

export default class Error extends React.Component<Props, State> {
  render() {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="grid grid-rows-3 justify-items-center gap-4">
          <div>
            <img className="" src={travolta} alt="Error" />
          </div>
          <div>
            <p className="text-center">
              Uh-oh ... there's nothing here! \( ⚆ _ ⚆ )/ <br />
              It's probably a work in progress ... <br />
              Let's get you{" "}
              <Link
                className="underline decoration-sky-500 text-sky-500 dark:decoration-sky-700 dark:text-blue-700"
                to="/"
              >
                home
              </Link>
              !
            </p>
          </div>
        </div>
      </div>
    );
  }
}
