'use client';

import React from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Box,
  IconButton,
  Typography,
  Divider,
  useMediaQuery,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MenuIcon from '@mui/icons-material/Menu';
import 'flag-icons/css/flag-icons.min.css';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useTheme } from '@mui/material/styles';

const CustomAppBar = () => {
  const t = useTranslations('AppBar');
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useParams();
  const theme = useTheme();
  const isLgSize = useMediaQuery(theme.breakpoints.down('lg'));

  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(null);
  const isLgSizeMenuOpen = Boolean(menuAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const currentLocaleIcons = locale === 'en' ? 'gb' : locale;
  const firstPathname = pathname.split('/')[2];
  const color = (path?: string) => (isSelected(path) ? 'primary' : 'text.secondary');
  const isSelected = (path?: string) => firstPathname === path;

  const handleLangClick = (event: React.MouseEvent<HTMLElement>) => {
    setLangAnchorEl(event.currentTarget);
  };

  const handleLangClose = () => {
    setLangAnchorEl(null);
  };

  const handleChangeLocale = (newLocale: string) => {
    if (typeof pathname !== 'string' || typeof locale !== 'string') return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
    setLangAnchorEl(null);
  };

  return (
    <AppBar>
      <Toolbar className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-4">
          <Box className="flex cursor-pointer flex-row items-center gap-4" onClick={() => router.push('/')}>
            <Image src="/logo.png" alt="logo" width={160} height={160} />
          </Box>
          {isLgSize ? (
            <>
              <Menu anchorEl={menuAnchorEl} open={isLgSizeMenuOpen} onClose={handleMobileMenuClose}>
                <MenuItem component={Link} href="/" onClick={handleMobileMenuClose} selected={isSelected()}>
                  {t('Menu.home')}
                </MenuItem>
                <MenuItem
                  component={Link}
                  href="/explore"
                  onClick={handleMobileMenuClose}
                  selected={isSelected('explore')}
                >
                  {t('Menu.exploreCourses')}
                </MenuItem>
                <MenuItem component={Link} href="/forum" onClick={handleMobileMenuClose} selected={isSelected('forum')}>
                  {t('Menu.forum')}
                </MenuItem>
                <MenuItem component={Link} href="/news" onClick={handleMobileMenuClose} selected={isSelected('news')}>
                  {t('Menu.news')}
                </MenuItem>
                <MenuItem component={Link} href="/faq" onClick={handleMobileMenuClose} selected={isSelected('faq')}>
                  {t('Menu.faq')}
                </MenuItem>
                <Divider />
                <div className="flex flex-row justify-center gap-4">
                  <span
                    className={`fi fi-th cursor-pointer text-xl ${locale === 'th' ? '' : 'opacity-20'}`}
                    onClick={() => handleChangeLocale('th')}
                  />
                  <span
                    className={`fi fi-gb cursor-pointer text-xl ${locale === 'en' ? '' : 'opacity-20'}`}
                    onClick={() => handleChangeLocale('en')}
                  />
                </div>
              </Menu>
            </>
          ) : (
            <Box className="flex flex-row items-center gap-8">
              <Link href="/">
                <Typography variant="body1" fontWeight="bold" color={color()}>
                  {t('Menu.home')}
                </Typography>
              </Link>
              <Link href="/explore">
                <Typography variant="body1" fontWeight="bold" color={color('explore')}>
                  {t('Menu.exploreCourses')}
                </Typography>
              </Link>
              <Link href="/forum">
                <Typography variant="body1" fontWeight="bold" color={color('forum')}>
                  {t('Menu.forum')}
                </Typography>
              </Link>
              <Link href="/news">
                <Typography variant="body1" fontWeight="bold" color={color('news')}>
                  {t('Menu.news')}
                </Typography>
              </Link>
              <Link href="/faq">
                <Typography variant="body1" fontWeight="bold" color={color('faq')}>
                  {t('Menu.faq')}
                </Typography>
              </Link>
              <Typography variant="body2" color="text.primary">
                v 1.5.25
              </Typography>
            </Box>
          )}
        </div>
        <div className="flex flex-row items-center gap-2">
          {isLgSize && (
            <IconButton color="default" onClick={handleMobileMenuOpen} onMouseEnter={handleMobileMenuOpen}>
              <MenuIcon />
            </IconButton>
          )}
          {!isLgSize && (
            <>
              <IconButton onClick={handleLangClick} onMouseEnter={handleLangClick}>
                <span className={`fi fi-${currentLocaleIcons}`} />
              </IconButton>
              <Menu anchorEl={langAnchorEl} open={Boolean(langAnchorEl)} onClose={handleLangClose}>
                <div className="flex flex-row justify-center gap-3 px-4">
                  <span
                    className={`fi fi-th cursor-pointer text-xl ${locale === 'th' ? '' : 'opacity-20'}`}
                    onClick={() => handleChangeLocale('th')}
                  />
                  <span
                    className={`fi fi-gb cursor-pointer text-xl ${locale === 'en' ? '' : 'opacity-20'}`}
                    onClick={() => handleChangeLocale('en')}
                  />
                </div>
              </Menu>
            </>
          )}
          <Button href="/register">{t('Action.register')}</Button>
          <Button variant="contained" endIcon={<ArrowForwardIcon />} href="/login">
            {t('Action.login')}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
