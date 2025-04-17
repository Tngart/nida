'use client';
import { Avatar, Box, Chip, Divider, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import { CourseData } from '@/types/course';

interface CourseProps {
  data: CourseData;
}
const CourseCard: React.FC<CourseProps> = ({ data }) => {
  return (
    <CardActionArea href={`/explore/${data.id}`}>
      <Card className="flex min-h-[320px] w-full flex-col">
        <Box className="flex h-full flex-col">
          <div>
            <CardMedia
              component="img"
              width={'100%'}
              height={'100%'}
              image={data.courseImageUrl}
              alt={data.id.toString()}
              loading="lazy"
              sx={{
                height: 130,
                objectFit: 'cover',
              }}
            />
            <Chip
              className="z-1 absolute left-4 top-4"
              label={
                <Typography variant="body2" component="span">
                  {data.category.name}
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
                {data.name}
              </Typography>
              <div className="flex flex-row items-center gap-2">
                <Avatar alt={data.trainer.profileImageUrl} src={data.trainer.profileImageUrl} />
                <Typography className="line-clamp-3 overflow-hidden" variant="body1" color="text.primary">
                  {data.trainer.name}
                </Typography>
              </div>
            </div>
            <Divider />
            <div className="flex flex-row items-center gap-2">
              <Rating readOnly name="rating" defaultValue={data.avgRating} precision={0.5} size="small" />
              <Typography color="text.primary" fontWeight={'bold'}>
                {data.avgRating}
              </Typography>
              <Typography color="text.secondary">({data.reviewCount})</Typography>
            </div>
          </CardContent>
        </Box>
      </Card>
    </CardActionArea>
  );
};

export default CourseCard;
