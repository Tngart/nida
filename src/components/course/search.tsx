'use client';

import { Category, CourseListPayload } from '@/types/course';
import { Search } from '@mui/icons-material';
import {
  Button,
  Chip,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import { useTranslations } from 'next-intl';
import React, { FC, useEffect, useState } from 'react';

interface IProps {
  categories: Category[];
  onSubmit: (payload: CourseListPayload) => void;
}

const sortOptions = [
  { value: 'name_desc', label: 'Name (A-Z)' },
  { value: 'name_asc', label: 'Name (Z-A)' },
  { value: 'rating_asc', label: 'Highest Rated' },
  { value: 'date_asc', label: 'Newest' },
];

const SearchCourseComponent: FC<IProps> = ({ categories, onSubmit }) => {
  const t = useTranslations('Course.Search');

  const [keyword, setKeyword] = useState<string>();
  const [filters, setFilters] = useState<string[]>([]);
  const [sort, setSort] = useState<string>('name_desc');

  const orderBy = sort.split('_')[0];
  const orderType = sort.split('_')[1];

  const handleChangeSort = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (value !== sort) setSort(value);
  };

  const handleChangeFilters = (event: SelectChangeEvent<typeof filters>) => {
    const {
      target: { value },
    } = event;
    setFilters(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDeleteFilter = (id: string) => {
    setFilters((prev) => prev.filter((item) => item !== id));
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    onSubmit({
      keyword,
      max: 10,
      offset: 0,
      orderBy,
      orderType,
      categoryIds: filters.join(','),
    });
  };

  // Trigger search when filters or sort changes
  useEffect(() => {
    handleSubmit();
  }, [filters, sort]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-16 py-[40px]">
        <div className="flex flex-col justify-between gap-4 pt-[80px] md:flex-row">
          <Typography className="z-10 w-full" variant="h4" fontWeight="bold" color="white">
            {t('title')}
          </Typography>
          <TextField
            className="w-full md:w-1/2"
            fullWidth
            placeholder={t('placeholder')}
            variant="outlined"
            onChange={(event) => setKeyword(event.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <Button type="submit" startIcon={<Search />} variant="contained">
                    {t('button')}
                  </Button>
                ),
              },
            }}
          />
        </div>

        <div className="flex w-full flex-row items-center justify-between gap-2">
          <div className="flex flex-wrap gap-2">
            {filters.map((id) => {
              const category = categories.find((c) => c.id === Number(id));
              return <Chip key={id} label={category?.name} onDelete={() => handleDeleteFilter(id)} color="primary" />;
            })}
          </div>

          <div className="flex w-1/2 flex-row gap-4">
            <FormControl fullWidth>
              <Select
                multiple
                displayEmpty
                value={filters}
                onChange={handleChangeFilters}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <Typography color="textDisabled">{t('empty')}</Typography>;
                  }
                  return categories
                    .filter((c) => selected.includes(String(c.id)))
                    .map((c) => c.name)
                    .join(', ');
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category.id} value={String(category.id)}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <Select
                value={sort}
                onChange={handleChangeSort}
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  '& .MuiSelect-icon': {
                    color: 'primary.contrastText',
                  },
                }}
              >
                {sortOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchCourseComponent;
