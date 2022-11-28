import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export const Benevoles = () => {
  return (
    <StaticImage
      src="../../images/ces/benevoles.jpg"
      alt="Bénévoles de Codeurs en Seine lors de la fin de l'événement"
      placeholder="blurred"
      width={500}
      layout="fullWidth"
    />
  );
};
