import { Forum } from '@/types/forum';
import { Comment, Sms, ThumbUp } from '@mui/icons-material';
import { Avatar, Card, CardContent, Grid, Pagination, Typography } from '@mui/material';
import { FC } from 'react';

interface IProps {
  forums: Forum[];
}
const ForumCardComponent: FC<IProps> = ({ forums }) => {
  return (
    <div className="mx-10 flex flex-col gap-6">
      {forums.map((forum) => {
        return (
          <Card
            onClick={() => console.log('test')}
            sx={{
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out, filter 0.1s ease-in-out',
              '&:hover': {
                transform: 'scale(1.05)',
              },
              '&:active': {
                filter: 'brightness(0.9)',
              },
            }}
          >
            <CardContent className="flex flex-col gap-6">
              <Typography variant="h6" fontWeight="bold">
                {forum.title}
              </Typography>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-2">
                  <Avatar
                    className="my-auto"
                    variant="square"
                    src={forum.createBy.profileImageUrl}
                    sx={{ width: 35, height: 35 }}
                  />
                  <div className="flex flex-col">
                    <Typography variant="subtitle1" fontWeight="bold">
                      {forum.createBy.name}
                    </Typography>
                    <Typography variant="subtitle1">{forum.updateTime}</Typography>
                  </div>
                </div>
                <div className="my-auto flex flex-row gap-2">
                  <ThumbUp />
                  <Typography>{forum.likes}</Typography>
                  <Sms />
                  <Typography>{forum.comments}</Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
      <Pagination className="mx-auto" color="primary" />
    </div>
  );
};

export default ForumCardComponent;
