'use client';
import { Box, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { News } from '@/types/home';

interface NewsProps {
  data: News;
}
const NewsCard: React.FC<NewsProps> = ({ data }) => {
  return (
    <CardActionArea href={`/news/${data.id}`}>
      <Card className="flex min-h-[360px] w-full flex-col">
        <Box className="flex h-full flex-col">
          <div className="p-4">
            <CardMedia
              sx={{ borderRadius: '1rem' }}
              component="img"
              width={'100%'}
              height={'100%'}
              image={data.imageUrl}
              alt={data.id.toString()}
              loading="lazy"
            />
            <Chip
              className="z-1 absolute left-8 top-8"
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
          </div>
          <CardContent className="flex h-[200px] flex-col justify-between">
            <div className="flex flex-col gap-2">
              <Typography className="line-clamp-2 overflow-hidden" variant="subtitle1" fontWeight={'bold'}>
                {data.title}
              </Typography>
              <Typography className="line-clamp-3 overflow-hidden" variant="body2" color="text.secondary">
                {data.description}
              </Typography>
            </div>
            <Typography variant="body1" color="text.primary">
              {data.publishDate}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
};

export default NewsCard;
