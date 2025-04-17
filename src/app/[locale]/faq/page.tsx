import { fetchFaq, fetchFaqData } from '@/service/faq';
import dynamic from 'next/dynamic';
import React from 'react';

const FaqComponent = dynamic(() => import('@/components/faq'));

const FaqPage = async () => {
  const faqList = await fetchFaq({ offset: 0, limit: 10, index: true });
  const faqDataList = await fetchFaqData('-1', { offset: 0, limit: 30 });

  return <FaqComponent faqClusters={faqList.clusters} faqQuestions={faqDataList.questions} />;
};

export default FaqPage;
