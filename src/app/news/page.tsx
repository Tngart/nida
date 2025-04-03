import dynamic from "next/dynamic";
import React from "react";
import { mockNews } from "./mock";

const NewsCard = dynamic(() => import("@/components/news-card"));

const NewsPage = () => {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center">
      {mockNews.responseObject.news.map((data) => (
        <NewsCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default NewsPage;
