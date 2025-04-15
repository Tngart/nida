'use client';

import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button, IconButton, LinearProgress, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Course } from '@/types/home';
import CourseCard from '../course-card';
import { useTranslations } from 'next-intl';

interface IProps {
  courses: Course[];
}

const RecommendedCoursesPage: FC<IProps> = ({ courses }) => {
  const t = useTranslations('Homepage.Recommend');
  const swiperRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setProgress(swiper.progress);
  };

  return (
    <div className="bg-[#2B2B2F] px-48 py-10">
      <div className="mb-5 flex flex-row items-center justify-between">
        <Typography variant="h4" fontWeight={'bold'} color="white">
          {t('title')}
        </Typography>
        <Button variant="outlined" color="info" href="/explore">
          <Typography variant="body1" fontWeight={'bold'}>
            {t('button')}
          </Typography>
        </Button>
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mb-8"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <CourseCard data={course} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="relative flex items-center gap-4 px-2">
        <IconButton onClick={() => swiperRef.current?.slidePrev()} className="z-10 !bg-white text-black shadow-md">
          <ArrowBack />
        </IconButton>
        <LinearProgress variant="determinate" value={progress * 100} sx={{ width: '100%' }} />
        <IconButton onClick={() => swiperRef.current?.slideNext()} className="z-10 !bg-white text-black shadow-md">
          <ArrowForward />
        </IconButton>
      </div>
    </div>
  );
};

export default RecommendedCoursesPage;
