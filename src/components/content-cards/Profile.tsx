import { CardContent } from "../ui/card";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import React from "react";

const Profile = () => {
  return (
    <CardContent>
      <div className="grid grid-cols-2">
        <div className="m-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" className="mb-2"></Input>
        </div>
        <div className="m-2">
          <Label htmlFor="phone">Name</Label>
          <Input
            id="phone"
            placeholder="+91 1231231234"
            className="mb-2"
          ></Input>
        </div>
        <div className="m-2">
          <Label htmlFor="linkedin">LinkedIn</Label>
          <Input id="linkedin" placeholder="www.linkedin.com"></Input>
        </div>

        <div className="m-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="johndoe@gmail.com"
            className="mb-2"
          ></Input>
        </div>
        <div className="m-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Mumbai, MH"
            className="mb-2"
          ></Input>
        </div>
        <div className="m-2">
          <Label htmlFor="website">Website</Label>
          <Input id="website" placeholder="www.johndoe.com"></Input>
        </div>
      </div>
    </CardContent>
  );
};

export default Profile;
