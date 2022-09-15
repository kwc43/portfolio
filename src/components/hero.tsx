import React from "react";
import Scene from "./three/scene";
import ProfilePicture from "../assets/profile_picture.jpg";
import { Avatar } from "./utils/index";

export default class Hero extends React.Component {
  render() {
    return (
      <div className="w-full grid grid-cols-2 items-baseline">
        <div className="w-72 h-72 self-baseline">
          <Avatar pathName=""/>
        </div>
        <div className="justify-self-end">
          <Scene />
        </div>
      </div>
    );
  }
}
