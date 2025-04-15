'use client';

import React from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'flag-icons/css/flag-icons.min.css';
import Image from 'next/image';
import Link from 'next/link';

const CustomAppBar = () => {
  const t = useTranslations('AppBar');

  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const currentLocaleIcons = locale === 'en' ? 'gb' : locale;
  const firstPathname = pathname.split('/')[2];
  const color = (path?: string) => (firstPathname === path ? 'primary' : 'text.secondary');

  const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLangClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLocale = (newLocale: string) => {
    if (typeof pathname !== 'string' || typeof locale !== 'string') return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box className="flex flex-row items-center gap-4">
          <Box>
            <Image src="/logo.png" alt="logo" width={150} height={150} />
          </Box>
          <Box className="flex flex-row items-center gap-4">
            <Link href="/">
              <Typography variant="subtitle2" fontWeight={'bold'} color={color()}>
                {t('Menu.home')}
              </Typography>
            </Link>
            <Link href="/explore">
              <Typography variant="subtitle2" fontWeight={'bold'} color={color('explore')}>
                {t('Menu.exploreCourses')}
              </Typography>
            </Link>
            <Link href="/forum">
              <Typography variant="subtitle2" fontWeight={'bold'} color={color('forum')}>
                {t('Menu.forum')}
              </Typography>
            </Link>
            <Link href="/news">
              <Typography variant="subtitle2" fontWeight={'bold'} color={color('news')}>
                {t('Menu.news')}
              </Typography>
            </Link>
            <Link href="/faq">
              <Typography variant="subtitle2" fontWeight={'bold'} color={color('faq')}>
                {t('Menu.faq')}
              </Typography>
            </Link>
            <Typography variant="subtitle2" color="text.secondary">
              v 1.5.25
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Box>
            <IconButton onClick={handleLangClick} onMouseEnter={handleLangClick}>
              <span className={`fi fi-${currentLocaleIcons}`} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLangClose}>
              <MenuItem onClick={() => handleChangeLocale('th')}>
                <span className="fi fi-th mr-2" /> {t('Locales.th')}
              </MenuItem>
              <MenuItem onClick={() => handleChangeLocale('en')}>
                <span className="fi fi-gb mr-2" /> {t('Locales.en')}
              </MenuItem>
            </Menu>
          </Box>
          <Button>{t('Action.register')}</Button>
          <Button variant="contained" endIcon={<ArrowForwardIcon />}>
            {t('Action.login')}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
