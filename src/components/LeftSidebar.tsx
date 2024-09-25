import ExpCardContent from "./content-cards/ExpCardContent";
import CollapsibleCard from "./collapsibleCard";
import Profile from "./content-cards/Profile";
const LeftSidebar = () => {
  return (
    <div className="flex-1 overflow-y-scroll border-r-2 p-4">
      <CollapsibleCard title="Profile" description="Enter your details">
        <Profile />
      </CollapsibleCard>
      <CollapsibleCard
        title="Professional Experience"
        description="Your professional experience goes here"
      >
        <ExpCardContent></ExpCardContent>
      </CollapsibleCard>
      <CollapsibleCard
        title="Skills"
        description="Add your skills and keywords to increase resume match percentage."
      >
        <ExpCardContent></ExpCardContent>
      </CollapsibleCard>
      <CollapsibleCard
        title="Projects"
        description="Add your relevent Projects here"
      >
        <ExpCardContent></ExpCardContent>
      </CollapsibleCard>
      <CollapsibleCard
        title="Education"
        description="Your education details goes here"
      >
        <ExpCardContent></ExpCardContent>
      </CollapsibleCard>
    </div>
  );
};

export default LeftSidebar;
