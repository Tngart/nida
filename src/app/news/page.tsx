import dynamic from "next/dynamic";
import React from "react";
import { mockNews } from "./mock";
import { Box } from "@mui/material";

const NewsCard = dynamic(() => import("@/components/news-card"));

const NewsPage = () => {
  return (
    <Box className="flex flex-wrap gap-4">
      {mockNews.responseObject.news.map((data) => (
        <NewsCard key={data.id} data={data} />
      ))}
    </Box>
  );
};

export default NewsPage;
