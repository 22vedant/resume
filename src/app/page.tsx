import Link from "next/link";
import LeftSidebar from "~/components/LeftSidebar";
import RightSidebar from "~/components/RightSidebar";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-wrap">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
}
