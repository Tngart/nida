import { Search } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface IProps {
  keyword?: string;
  setKeyword: (val: string) => void;
  getForums: (keywordFilter?: string) => Promise<void>;
}
const SearchForumComponent: FC<IProps> = ({ keyword, setKeyword, getForums }) => {
  const t = useTranslations('Forum');

  return (
    <div className="mx-10 flex flex-col gap-14 py-[40px]">
      <Typography className="z-10 w-full pt-[90px] text-center" variant="h4" fontWeight="bold" color="white">
        {t('title')}
      </Typography>
      <TextField
        className="w-full md:w-1/2"
        fullWidth
        placeholder={t('search.box')}
        variant="outlined"
        onChange={(event) => setKeyword(event.target.value)}
        slotProps={{
          input: {
            endAdornment: (
              <Button startIcon={<Search />} variant="contained" onClick={() => getForums(keyword)}>
                {t('search.button')}
              </Button>
            ),
          },
        }}
      />
    </div>
  );
};

export default SearchForumComponent;
