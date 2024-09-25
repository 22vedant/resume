import { CardContent } from "../ui/card";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Plus } from "lucide-react";

const ExpCardContent = () => {
  return (
    <CardContent>
      <div className="grid grid-cols-2">
        <div className="m-2">
          <Label htmlFor="employer">Employer</Label>
          <Input
            type="text"
            id="employer"
            placeholder="Meta"
            className="mb-2"
          />
        </div>
        <div className="m-2">
          <Label htmlFor="position">Position</Label>
          <Input
            type="text"
            id="position"
            placeholder="Frontend Developer"
            className="mb-2"
          />
        </div>

        <div className="m-2">
          <Label htmlFor="location2">Location</Label>
          <Input
            type="text"
            id="location2"
            placeholder="Mumbai, MH"
            className="mb-2"
          />
        </div>
        <div className="m-2 flex items-center">
          <div>Start Date</div>
          <div>End Date</div>
        </div>
      </div>
      <Button variant={"secondary"} className="w-full" onClick={() => {}}>
        <Plus size={"16px"} strokeWidth={"0.75px"}></Plus>
      </Button>
    </CardContent>
  );
};

export default ExpCardContent;
