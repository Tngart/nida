"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { News } from "@/types/home";
import { Box, Chip } from "@mui/material";

interface NewsProps {
  data: News;
}
const NewsCard: React.FC<NewsProps> = ({ data }) => {
  return (
    <Card className="flex flex-col w-[300px] h-[350px]">
      <CardActionArea className="h-full">
        <Box className="flex flex-col h-full">
          <CardMedia
            component="img"
            width={"100%"}
            image={data.imageUrl}
            alt={data.id.toString()}
            loading="lazy"
            sx={{
              height: "160px",
            }}
          />
          <Chip
            className="absolute top-3 left-3 z-1"
            label={
              <Typography variant="body2" component="span">
                {data.topicType.name}
              </Typography>
            }
            size="small"
            variant="filled"
            sx={(theme) => ({
              bgcolor: theme.palette.background.default,
            })}
          />
          <CardContent className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-2">
              <Typography
                className="line-clamp-2 overflow-hidden"
                variant="subtitle1"
                fontWeight={"bold"}
              >
                {data.title}
              </Typography>
              <Typography
                className="line-clamp-3 overflow-hidden"
                variant="body2"
                color="text.secondary"
              >
                {data.description}
              </Typography>
            </div>
            <Typography variant="body2" color="text.primary">
              {data.publishDate}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
