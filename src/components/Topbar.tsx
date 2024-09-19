import React from "react";
import { ModeToggle } from "src/components/theme-toggle";
import { Button } from "./ui/button";
const Topbar = () => {
  return (
    <div className="flex w-full items-center justify-between border-b px-6 py-3">
      <div>Title</div>
      <div className="flex items-center justify-around">
        <Button>Download</Button>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Topbar;
