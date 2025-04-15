import { Link, Typography } from '@mui/material';

export default function Footer() {
  return (
    <div className="fixed-0 w-full">
      <div className="flex flex-col items-center justify-between gap-6 px-40 md:flex-row">
        <div className="text-center md:text-left">
          <Typography>E-learning Website publish by NIDA</Typography>
          <Typography>Environment School | The National</Typography>
          <Typography>Institute of Development Administration</Typography>
        </div>

        <div className="text-center md:text-left">
          <Typography variant="h6" fontWeight={'bold'}>
            Contact
          </Typography>
          <div className="flex flex-row gap-2">
            <Typography>Email:</Typography>
            <Link underline="always" href="#">
              gseda@nida.ac.th
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <Typography>Phone:</Typography>
            <Link underline="always" href="#">
              02-727-3130
            </Link>
            <Link underline="always" href="#">
              02-727-3291
            </Link>
            <Link underline="always" href="#">
              082-782-9352
            </Link>
          </div>
        </div>

        <div className="text-center md:text-left">
          <Typography variant="h6" fontWeight={'bold'}>
            Download
          </Typography>
        </div>
      </div>

      <div className="bg-primary-main mt-8 flex flex-col items-center justify-between border-t text-sm md:flex-row">
        <div className="flex w-full justify-between p-4">
          <Typography variant="body2" color="primary.contrastText">
            © 2021 Nida Online Learning. All Rights Reserved.
          </Typography>
          <div className="flex gap-4">
            <Link underline="hover" href="#" color="primary.contrastText">
              Privacy Policy
            </Link>
            <Link underline="hover" href="#" color="primary.contrastText">
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
