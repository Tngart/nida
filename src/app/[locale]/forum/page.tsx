import dynamic from 'next/dynamic';
import React from 'react';

const ForumComponent = dynamic(() => import('@/components/forum'));

const ForumPage = () => {
  return <ForumComponent />;
};

export default ForumPage;
