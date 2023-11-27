import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const navBars = ["Search", "Posts", "Transactions", "Map"];

const NavBars = () => {
  const [selected, setSelected] = useState(navBars[0]);
  const router = useRouter();

  useEffect(() => {
    const str = router.asPath.slice(1);
    setSelected(str[0].toUpperCase() + str.slice(1));
  }, [router.asPath]);

  const handleSelect = (navBar: string) => {
    setSelected(navBar);
    router.push(`/${navBar.toLowerCase()}`);
  };

  return (
    <ul key={router.asPath} className="self-end text-2xl w-[80%] my-16">
      {navBars.map((navBar) => (
        <li
          key={navBar}
          onClick={() => handleSelect(navBar)}
          className={`text-center ${
            selected === navBar && "bg-[#D9D9D9]"
          } py-4 my-2 rounded-l-lg cursor-pointer`}
        >
          {navBar}
        </li>
      ))}
    </ul>
  );
};

export default NavBars;
