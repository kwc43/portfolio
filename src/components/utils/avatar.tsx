import React from "react";
import ProfilePicture from "../../assets/profile_picture.jpg";
interface AvatarProps {
  pathName: string
}

export default class Avatar extends React.Component<AvatarProps> {
  render() {
    return (
      <div className="w-full h-full height:tracking-wide shadow-xl rounded-full border-4 border-gray-900 dark:border-gray-900 z-5 overflow-hidden">
        <img src= {ProfilePicture} alt="profile"/>
      </div>
    );
  }
}
