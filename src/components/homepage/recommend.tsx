/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button, IconButton, LinearProgress, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC, useRef, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Course } from '@/types/home';

import CourseCard from '../course/card';

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
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#2B2B2F] py-5">
      <div className="mx-4 xl:mx-32">
        <div className="mb-5 flex flex-row items-center justify-between">
          <Typography variant="h4" fontWeight="bold" color="white">
            {t('title')}
          </Typography>
          <Button variant="outlined" color="info" href="/explore">
            <Typography variant="body1" fontWeight="bold">
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
    </section>
  );
};

export default RecommendedCoursesPage;
