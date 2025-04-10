'use client';

import React from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { AppBar, Toolbar, Button, Menu, MenuItem, Box, IconButton, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'flag-icons/css/flag-icons.min.css';

const CustomAppBar = () => {
  const t = useTranslations('AppBar');

  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
        <Box display="flex" alignItems="center">
          <Box ml={1}>
            <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '0.9rem' }}>
              NIDA
              <br />
              ENVIRONMENT
              <br />
              SCHOOL
            </Typography>
          </Box>
        </Box>

        <Box display="flex" gap={3} alignItems="center">
          <Button>{t('Menu.home')}</Button>
          <Button>{t('Menu.exploreCourses')}</Button>
          <Button>{t('Menu.forum')}</Button>
          <Button>{t('Menu.news')}</Button>
          <Button>{t('Menu.faq')}</Button>
          <Typography variant="body2" sx={{ color: '#999' }}>
            v 1.5.25
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <Box>
            <IconButton onClick={handleLangClick} onMouseEnter={handleLangClick}>
              <span className={`fi fi-${locale}`} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleLangClose}>
              <MenuItem onClick={() => handleChangeLocale('th')}>
                <span className="fi fi-th mr-2" /> {t('Locales.th')}
              </MenuItem>
              <MenuItem onClick={() => handleChangeLocale('en')}>
                <span className="fi fi-en mr-2" /> {t('Locales.en')}
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
