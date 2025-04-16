import { fetchNewsDetail } from '@/service/news';
import { ChevronLeft } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';

const NewsCardComponent = dynamic(() => import('@/components/news/detail/card'));

const NewsDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const newDetail = await fetchNewsDetail(id, { max: 10, offset: 0 });
  const t = await getTranslations('News.Content');
  return (
    <>
      <div className="sticky top-0 z-50 bg-[#1d1d21] py-[55px]" />
      <div className="relative h-full">
        <div className="absolute top-0 h-[600px] w-full bg-[#1d1d21]" />
        <div className="relative flex flex-col gap-4 px-2 xl:px-48">
          <Button variant="text" startIcon={<ChevronLeft />} sx={{ color: 'white', width: '100px' }} href="/news">
            <Typography fontWeight={'bold'} variant="subtitle2">
              {t('back')}
            </Typography>
          </Button>
          <div className="px-2 pb-8 xl:px-28">
            <NewsCardComponent news={newDetail.news} comments={newDetail.comments}></NewsCardComponent>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailPage;
