'use client';
import { ExpandMore, PlayCircleOutline } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC, useState } from 'react';

import { Chapter, FileResource } from '@/types/course-index';

interface IProps {
  data: Chapter;
  files: FileResource[];
}

const ChapterMaterialComponent: FC<IProps> = ({ data, files }) => {
  const t = useTranslations('Course.Detail.Chapter');
  const [expanded, setExpanded] = useState(false);

  const handleChange = (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
    console.log({ isExpanded });
  };
  return (
    <Accordion elevation={0} disableGutters expanded={expanded} onChange={handleChange}>
      <Paper
        elevation={3}
        sx={{
          bgcolor: expanded ? 'primary.main' : 'white',
        }}
      >
        <AccordionSummary expandIcon={<ExpandMore />}>
          <div className="flex w-full flex-row justify-between px-2">
            <Typography variant="body1" fontWeight={'bold'}>
              {data.chapter.name}
            </Typography>
            <Typography variant="body1" fontWeight={'bold'}>
              {t('material', { count: data.materialTotal })}
            </Typography>
          </div>
        </AccordionSummary>
      </Paper>
      <AccordionDetails className="grid gap-2">
        {files.map((file) => (
          <Paper key={file.id} elevation={3} className="flex flex-row items-center gap-4 px-8 py-3">
            <PlayCircleOutline color="primary" />
            <Typography variant="body1" fontWeight={'bold'}>
              {file.title}
            </Typography>
          </Paper>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default ChapterMaterialComponent;
