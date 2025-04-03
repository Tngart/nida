import Box from "@mui/material/Box";
import { PropsWithChildren } from "react";

export default function LoginLayout({ children }: PropsWithChildren) {
  return <Box className="flex items-center justify-center p-4">{children}</Box>;
}
