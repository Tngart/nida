import { Link, Typography } from "@mui/material";

export default function Footer() {
  return (
    <footer className="fixed-0 w-full">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-16">
        <div className="text-center md:text-left">
          <Typography>E-learning Website publish by NIDA</Typography>
          <Typography>Environment School | The National</Typography>
          <Typography>Institute of Development Administration</Typography>
        </div>

        <div className="text-center md:text-left">
          <Typography variant="h6" fontWeight={"bold"}>
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
          <Typography variant="h6" fontWeight={"bold"}>
            Download
          </Typography>
        </div>
      </div>

      <div className="mt-8 border-t bg-[#adca31] flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex justify-between w-full p-4">
          <Typography variant="body2" color="white">
            © 2021 Nida Online Learning. All Rights Reserved.
          </Typography>
          <div className="flex gap-4">
            <Link underline="hover" href="#" color="white">
              Privacy Policy
            </Link>
            <Link underline="hover" href="#" color="white">
              Terms Of Service
            </Link>
          </div>
          <Typography variant="body2" color="white">
            v 1.5.25
          </Typography>
        </div>
      </div>
    </footer>
  );
}
