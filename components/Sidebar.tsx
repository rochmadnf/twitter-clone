import React from "react";
import {
  BellIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  HomeIcon,
  RectangleStackIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        src="https://links.papareact.com/drq"
        alt="Twitter Logo"
        className="m-3 h-10 w-10"
      />

      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={HashtagIcon} title="Explore" />
      <SidebarRow Icon={BellIcon} title="Notifications" />
      <SidebarRow Icon={EnvelopeIcon} title="Messages" />
      <SidebarRow Icon={RectangleStackIcon} title="Lists" />

      <SidebarRow Icon={UserIcon} title="Sign In" />

      <SidebarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
    </div>
  );
}

export default Sidebar;
