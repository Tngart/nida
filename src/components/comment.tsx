import { CommentData } from '@/types/comment';
import { Avatar, Paper, Typography } from '@mui/material';
import React, { FC } from 'react';

interface IProps {
  comment: CommentData;
}

const CommentComponent: FC<IProps> = ({ comment }) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex w-full flex-row gap-4 p-4">
        <Avatar src={comment.image} />
        <Paper className="flex w-1/3 flex-col gap-2 p-4" elevation={3}>
          <Typography variant="subtitle1" fontWeight={'bold'}>
            {comment.userReply.name}
          </Typography>
          <Typography>{comment.answer}</Typography>
        </Paper>
      </div>
      {comment.reply.map((reply) => (
        <div className="flex w-full flex-row gap-4 px-24">
          <Avatar src={reply.image} />
          <Paper className="flex w-1/2 flex-col gap-2 p-4" elevation={3}>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              {reply.userReply.name}
            </Typography>
            <Typography>{reply.answer}</Typography>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default CommentComponent;
