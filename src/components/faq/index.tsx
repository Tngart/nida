'use client';
import { fetchFaqData } from '@/service/faq';
import { FaqCluster, Question } from '@/types/faq';
import dynamic from 'next/dynamic';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

const FilterFaqComponent = dynamic(() => import('@/components/faq/filter'));
const ListFaqComponent = dynamic(() => import('@/components/faq/list'));
const FreeRegistrationComponent = dynamic(() => import('@/components/homepage/registration'));

interface IProps {
  faqClusters: FaqCluster[];
  faqQuestions: Question[];
}
const FaqComponent: FC<IProps> = ({ faqClusters, faqQuestions }) => {
  const [faqIndex, setFaqIndex] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestion = useCallback(
    async (id?: string) => {
      const params = { offset: 0, limit: 30 };
      if (!id) {
        const data = await fetchFaqData('-1', params);
        setQuestions(data.questions);
      } else {
        const data = await fetchFaqData(id, params);
        setQuestions(data.questions);
      }
    },
    [setQuestions, fetchFaqData]
  );

  useEffect(() => {
    fetchQuestion(faqIndex);
  }, [fetchQuestion, faqIndex]);

  return (
    <>
      <div className="absolute left-1/2 top-0 z-0 h-[180px] w-screen -translate-x-1/2 bg-[#1d1d21]" />
      <FilterFaqComponent faqCluster={faqClusters} faqIndex={faqIndex} setFaqIndex={setFaqIndex} />
      <ListFaqComponent questions={questions} />
      <FreeRegistrationComponent />
    </>
  );
};

export default FaqComponent;
