import { Avatar, Button, Divider, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

import { Trainer } from '@/types/course';

interface IProps {
  listData: Trainer[];
}
const SupportTrainersComponent: FC<IProps> = ({ listData }) => {
  const t = useTranslations('Course.Detail.Trainer');
  const [showAll, setShowAll] = useState(false);
  const trainersToShow = showAll ? listData : listData?.slice(0, 3);

  return (
    <div className="flex w-2/5 flex-row gap-8">
      <Divider variant="fullWidth" orientation="vertical" sx={{ color: 'black' }} />
      <div className="grid w-full gap-8">
        {trainersToShow.map((item) => (
          <div key={item.id} className="flex flex-row gap-8">
            <Avatar
              src={item.profileImageUrl}
              sx={{ width: 80, height: 80, borderWidth: '4px', borderColor: 'text.secondary' }}
            />
            <div className="flex flex-col justify-center">
              <Typography variant="subtitle1" fontWeight={'bold'}>
                {t('support')}
              </Typography>
              <Typography variant="h6" fontWeight={'bold'}>
                {item.name}
              </Typography>
            </div>
          </div>
        ))}
        {listData.length > 3 && (
          <Button variant="outlined" color="inherit" onClick={() => setShowAll(!showAll)}>
            {showAll ? t('Button.less') : t('Button.all')}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SupportTrainersComponent;
