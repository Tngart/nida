'use client';
import { NewsData } from '@/types/news';
import {
  AccessTimeOutlined,
  CalendarMonthOutlined,
  CampaignOutlined,
  MessageOutlined,
  ThumbUpAltOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Avatar, Button, Card, CardActionArea, CardActions, CardMedia, Divider, Typography } from '@mui/material';
import React, { FC } from 'react';
import { alpha } from '@mui/material/styles';

interface IProps {
  data: NewsData;
}

const NewsCardComponent: FC<IProps> = ({ data }) => {
  return (
    <Card variant="outlined">
      <CardActionArea href={`/news/${data.id}`}>
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-row items-center gap-4 align-middle">
            <Avatar
              sx={(theme) => ({
                width: 56,
                height: 56,
                color: theme.palette.primary.main,
                bgcolor: alpha(theme.palette.primary.main, 0.2),
              })}
            >
              <CampaignOutlined fontSize="large" />
            </Avatar>
            <div className="flex flex-col gap-1">
              <Typography variant="subtitle1" fontWeight={'bold'}>
                {data.title}
              </Typography>
              <div className="text-text-secondary flex flex-row gap-4">
                <Typography className="flex items-center">
                  <CalendarMonthOutlined className="mr-1" sx={{ fontSize: '12px' }} />
                  {data.publishDate.split(' ')[0]}
                </Typography>
                <Typography className="flex items-center">
                  <AccessTimeOutlined className="mr-1" sx={{ fontSize: '12px' }} /> {data.publishDate.split(' ')[1]}
                </Typography>
                <Typography className="flex items-center">
                  <VisibilityOutlined className="mr-1" sx={{ fontSize: '12px' }} />
                  {data.views}
                </Typography>
              </div>
              <Button variant="outlined" sx={{ width: '100px', height: '24px' }}>
                <Typography variant="body2">{data.attachType.name}</Typography>
              </Button>
            </div>
          </div>
          <Typography
            color="text.primary"
            sx={{ whiteSpace: 'normal' }}
            className="line-clamp-5 overflow-hidden"
            variant="body1"
          >
            {data.description}
          </Typography>
          <CardMedia
            component="img"
            width={'100%'}
            height={'100%'}
            image={data.imageUrl}
            alt={data.id.toString()}
            loading="lazy"
          />
        </div>
      </CardActionArea>
      <Divider />
      <CardActions sx={{ padding: 0 }}>
        <Button fullWidth startIcon={<ThumbUpAltOutlined />} sx={{ borderRadius: 0, height: '40px' }}>
          <Typography variant="body2">Like</Typography>
        </Button>
        <Button fullWidth startIcon={<MessageOutlined />} sx={{ borderRadius: 0, height: '40px' }}>
          <Typography variant="body2">Comment</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCardComponent;
