import { FaqCluster } from '@/types/faq';
import { Chip, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC, useCallback } from 'react';

interface IProps {
  faqCluster: FaqCluster[];
  faqIndex?: string;
  setFaqIndex: (val?: string) => void;
}
const FilterFaqComponent: FC<IProps> = ({ faqCluster, faqIndex, setFaqIndex }) => {
  const t = useTranslations('FAQ');
  const onClickChip = useCallback(
    (id: string) => {
      if (id !== faqIndex) {
        setFaqIndex(id);
      } else {
        setFaqIndex(undefined);
      }
    },
    [setFaqIndex, faqIndex]
  );

  return (
    <div className="mx-10 flex flex-col gap-14 py-[40px]">
      <Typography className="z-10 w-full pt-[90px] text-center" variant="h4" fontWeight="bold" color="white">
        {t('title')}
      </Typography>
      <div className="flex flex-row gap-2">
        {faqCluster.map((cluster) => (
          <Chip
            className="w-[100px]"
            variant="filled"
            color={cluster.id.toString() === faqIndex ? 'info' : 'primary'}
            label={cluster.title}
            onClick={() => onClickChip(cluster.id.toString())}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterFaqComponent;
