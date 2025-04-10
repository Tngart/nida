import dynamic from "next/dynamic";
import React from "react";
import { mockNews } from "./mock/news";
import { Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

const NewsCard = dynamic(() => import("@/components/news-card"));

const NewsComponent = () => {
  const t = useTranslations("Homepage.News");
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Typography variant="h4" fontWeight={"bold"}>
        {t("title")}
      </Typography>
      <Typography variant="subtitle1">{t("subtitle")}</Typography>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
        {mockNews.responseObject.news.map((data) => (
          <NewsCard key={data.id} data={data} />
        ))}
      </div>
      <Button variant="contained" size="large">
        {t("button")}
      </Button>
    </div>
  );
};

export default NewsComponent;
