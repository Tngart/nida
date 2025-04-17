'use client';
import {
  AccessTimeOutlined,
  CalendarMonthOutlined,
  CampaignOutlined,
  MessageOutlined,
  ThumbUpAlt,
  ThumbUpAltOutlined,
  VisibilityOutlined,
} from '@mui/icons-material';
import { Avatar, Button, Card, CardActions, CardMedia, Divider, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';
import React, { FC } from 'react';

import { CommentData } from '@/types/comment';
import { NewsData } from '@/types/news';

interface IProps {
  news: NewsData;
  comments: CommentData[];
}

const CommentComponent = dynamic(() => import('@/components/comment'));

const NewsCardComponent: FC<IProps> = ({ news, comments }) => {
  const t = useTranslations('News.Content');
  return (
    <Card variant="outlined">
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
              {news.title}
            </Typography>
            <div className="flex flex-row gap-4 text-text-secondary">
              {Boolean(news.updateDate) && (
                <Typography className="flex items-center">
                  <CalendarMonthOutlined className="mr-1" sx={{ fontSize: '12px' }} />
                  {news.updateDate}
                </Typography>
              )}
              {Boolean(news.updateTime) && (
                <Typography className="flex items-center">
                  <AccessTimeOutlined className="mr-1" sx={{ fontSize: '12px' }} /> {news.updateTime}
                </Typography>
              )}
              {Boolean(news.views) && (
                <Typography className="flex items-center">
                  <VisibilityOutlined className="mr-1" sx={{ fontSize: '12px' }} />
                  {news.views}
                </Typography>
              )}
            </div>
            <Button variant="outlined" sx={{ width: '100px', height: '24px' }}>
              <Typography variant="body2">{news.attachType.name}</Typography>
            </Button>
          </div>
        </div>
        <Typography color="text.primary" sx={{ whiteSpace: 'normal' }} variant="body1">
          {news.description}
        </Typography>
        <CardMedia
          component="img"
          width={'100%'}
          height={'100%'}
          image={news.imageUrl}
          alt={news.id.toString()}
          loading="lazy"
        />
      </div>
      <Divider />
      <CardActions sx={{ padding: 0 }}>
        <Button
          fullWidth
          startIcon={news.isLiked ? <ThumbUpAlt /> : <ThumbUpAltOutlined />}
          sx={{ borderRadius: 0, height: '40px' }}
        >
          <Typography variant="body2" fontWeight={news.isLiked ? 'bold' : 'normal'}>
            {t('like')}
          </Typography>
        </Button>
        <Button fullWidth startIcon={<MessageOutlined />} sx={{ borderRadius: 0, height: '40px' }}>
          <Typography variant="body2">{t('comment')}</Typography>
        </Button>
      </CardActions>
      <Divider />
      <div className="flex flex-col gap-2 p-2">
        <div className="flex w-full flex-row justify-between">
          <Button variant="text" color="inherit">
            <Typography variant="body1" fontWeight={'bold'}>
              <ThumbUpAltOutlined sx={{ fontSize: '14px', mr: 1 }} />
              {news.likes}
            </Typography>
          </Button>
          <Button variant="text" color="inherit">
            <Typography variant="body1" fontWeight={'bold'}>
              {news.comments} {t('comment')}
            </Typography>
          </Button>
        </div>
        {comments.map((comment) => (
          <CommentComponent key={comment.id} comment={comment} />
        ))}
      </div>
    </Card>
  );
};

export default NewsCardComponent;
