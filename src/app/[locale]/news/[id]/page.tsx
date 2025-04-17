import { ChevronLeft } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { getTranslations } from 'next-intl/server';

import { fetchNewsDetail } from '@/service/news';

const NewsCardComponent = dynamic(() => import('@/components/news/detail/card'));

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const t = await getTranslations('News.Content');
  const { news, comments } = await fetchNewsDetail(id, { max: 10, offset: 0 });

  return (
    <>
      <div className="sticky left-0 right-0 top-0 z-50 w-screen -translate-x-32 bg-[#1d1d21] py-[55px]" />
      <section>
        <div className="absolute inset-0 top-[110px] -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1d1d21] to-transparent" />
          <img src="/course.png" alt="background" className="w-full object-cover" />
        </div>

        <div className="relative flex flex-col gap-4">
          <Button variant="text" startIcon={<ChevronLeft />} sx={{ color: 'white', width: '100px' }} href="/news">
            <Typography fontWeight="bold" variant="subtitle2">
              {t('back')}
            </Typography>
          </Button>

          <div className="px-2 pb-8 xl:px-28">
            <NewsCardComponent news={news} comments={comments} />
          </div>
        </div>
      </section>
    </>
  );
}
