import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavBars from "./NavBars";

const PageNav = () => {
  const router = useRouter();

  return (
    <div key={router.asPath} className="flex flex-col">
      <Image
        className="self-center my-8"
        width={200}
        height={150}
        src="/images/logo.png"
        alt="PoliHog Logo"
      />
      <NavBars />
    </div>
  );
};

export default PageNav;
