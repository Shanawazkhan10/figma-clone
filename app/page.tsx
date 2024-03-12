import { Room } from "./Room";
import { CollaborativeApp } from "./CollaborativeApp";
import Live from "@/components/Live";

export default function Page() {
  return (
    // <Room>
    <div className="h-[100vh] w-full flex justify-center items-center text-center">
      <h1 className="text-2xl text-white">FIGMA CLONE</h1>
      <Live />
    </div>
    // {/* <CollaborativeApp /> */ }
    // </Room>
  );
}