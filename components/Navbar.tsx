import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const ClientNavbar = dynamic(
  () => import("./client-navbar").then((mod) => mod.ClientNavbar),
  {
    ssr: false,
  }
);

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto px-[2rem] py-[2rem]">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/kitabisa.png"
            alt="kitabisa"
            width={100}
            height={100}
            className="w-[100px]"
            priority
          />
        </Link>
        <div className="border-r border-r-[#d1d1d1] h-12 mx-4"></div>
      </div>

      <ClientNavbar />
    </div>
  );
}
