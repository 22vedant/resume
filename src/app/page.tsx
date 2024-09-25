"use client";
import Link from "next/link";
import Image from "next/image";
import LeftSidebar from "~/components/LeftSidebar";
import RightSidebar from "~/components/RightSidebar";

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-1 flex-wrap overflow-y-scroll">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
}
