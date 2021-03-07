import React from "react";
import { useTheme, Image } from "@chakra-ui/react";

export const Logo = (props) => {
  const theme = useTheme();

  return (
    <Image
      src={theme.logos.white}
      ignoreFallback
      alt={theme.logos.alt}
      {...props}
    />
  );
};
