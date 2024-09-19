import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const LeftSidebar = () => {
  return (
    <div className="flex-1 overflow-y-scroll border-r-2 p-4">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Enter your details</CardDescription>
        </CardHeader>
        {/* <CardContent>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email" />
          </div>
        </CardContent> */}
      </Card>
    </div>
  );
};

export default LeftSidebar;
