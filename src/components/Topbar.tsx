"use client";
import React from "react";
import { ModeToggle } from "src/components/theme-toggle";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
const Topbar = () => {
  return (
    <div className="container flex h-[3.5rem] w-full items-center justify-between">
      {/* <div className="flex w-full items-center justify-between border-b px-6 py-3"> */}
      <div>
        <b>
          <i>RÉSUMÉ</i>
        </b>
      </div>
      <div className="flex items-center justify-around">
        <Button className="mr-1" variant={"outline"}>
          Download
        </Button>
        <Button
          className="mr-1"
          variant={"outline"}
          onClick={() => {
            signIn();
          }}
        >
          Sign in
        </Button>
        <ModeToggle></ModeToggle>
      </div>
    </div>
  );
};

export default Topbar;
