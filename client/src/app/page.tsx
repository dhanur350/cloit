import { Sidebar } from "@/components";
// import Image from "next/image";

export default function Home({children}:any) {
  return (
    <div className="flex p-6 w-full h-full">
      <Sidebar />
      {children}
    </div>
  );
}
