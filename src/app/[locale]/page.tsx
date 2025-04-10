import dynamic from "next/dynamic";
import React from "react";

const NewsComponent = dynamic(() => import("@/components/homepage/news"));

const HomePage = () => {
  return <NewsComponent />;
};

export default HomePage;
