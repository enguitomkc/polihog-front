import React, { useState } from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  
  return (
    <button onClick={()=>{router.push('/search')}}>
      Click Me
    </button>
  );
}

export default Index;