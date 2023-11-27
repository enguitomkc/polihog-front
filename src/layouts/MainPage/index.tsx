import PageNav from "@/components/PageNav";
import UserSection from "@/components/UserSection";
import React from "react";

const MainPage = ({ children }: any) => {
  return (
    <div className="grid grid-cols-[400px_1fr_400px] h-[100vh]">
      <PageNav />
      <div className="grid bg-[#D9D9D9] pt-8">{children}</div>
      <UserSection />
    </div>
  );
};

export default MainPage;
