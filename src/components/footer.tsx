import { Android, Apple } from '@mui/icons-material';
import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <div className="fixed-0 w-full">
      <div className="flex flex-col items-start justify-between gap-6 px-4 pt-4 md:flex-row xl:px-48">
        <div className="text-start md:text-left">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
          <Typography>{t('description')}</Typography>
        </div>

        <div className="text-start md:text-left">
          <Typography variant="subtitle1" fontWeight={'bold'}>
            {t('contact.title')}
          </Typography>
          <div className="flex flex-row gap-2">
            <Typography>{t('contact.email')}</Typography>
            <Link underline="always">gseda@nida.ac.th</Link>
          </div>
          <div className="flex flex-row gap-2">
            <Typography>{t('contact.phone')}</Typography>
            <Link underline="always">02-727-3130</Link>
            <Link underline="always">02-727-3291</Link>
            <Link underline="always">082-782-9352</Link>
          </div>
        </div>

        <div className="text-start md:text-left">
          <Typography variant="subtitle1" fontWeight={'bold'}>
            {t('download')}
          </Typography>
          <div className="flex flex-row items-end gap-3">
            <Android color="primary" />
            <Typography>Google Play Store</Typography>
          </div>
          <div className="flex flex-row items-end gap-3">
            <Apple color="primary" />
            <Typography>App Store</Typography>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between border-t bg-primary-main text-sm md:flex-row">
        <div className="flex w-full justify-between p-4">
          <Typography variant="body2" color="primary.contrastText">
            © 2021 Nida Online Learning. All Rights Reserved.
          </Typography>
          <div className="flex gap-4">
            <Link underline="hover" color="primary.contrastText">
              Privacy Policy
            </Link>
            <Link underline="hover" color="primary.contrastText">
              Terms Of Service
            </Link>
          </div>
          <Typography variant="body2" color="primary.contrastText">
            v 1.5.25
          </Typography>
        </div>
      </div>
    </div>
  );
}
