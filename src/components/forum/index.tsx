'use client';
import { fetchForum } from '@/service/forum';
import { Forum } from '@/types/forum';
import dynamic from 'next/dynamic';
import { FC, useCallback, useEffect, useState } from 'react';

const SearchForumComponent = dynamic(() => import('@/components/forum/search'));
const ForumCardComponent = dynamic(() => import('@/components/forum/card'));

interface IProps {}
const ForumComponent: FC<IProps> = () => {
  const [keyword, setKeyword] = useState<string>();
  const [forums, setForums] = useState<Forum[]>([]);

  const getForums = useCallback(
    async (keywordFilter?: string) => {
      const data = await fetchForum({ keyword: keywordFilter || keyword, offset: 0, max: 10 });
      setForums(data.forums);
    },
    [fetchForum]
  );

  useEffect(() => {
    getForums();
  }, [getForums]);

  return (
    <>
      <div className="absolute left-1/2 top-0 z-0 h-[180px] w-screen -translate-x-1/2 bg-[#1d1d21]" />
      <SearchForumComponent keyword={keyword} setKeyword={setKeyword} getForums={getForums} />
      <ForumCardComponent forums={forums} />
    </>
  );
};

export default ForumComponent;
