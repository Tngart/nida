import Box from "@mui/material/Box";
import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";

import Providers from "@/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nida",
  description: "Nida",
  icons: {
    apple: "/apple-touch-icon.png",
    icon: ["/favicon.ico", "/favicon.svg"],
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box>{children}</Box>
        </Providers>
      </body>
    </html>
  );
}
