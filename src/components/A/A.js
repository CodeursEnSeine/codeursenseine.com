import React from "react";
import { Link } from "@chakra-ui/core";

/**
 * The `A` React component is named after the HTML tag `a`. This is to avoid
 * name clash with Link from gatsby.
 */
export const A = ({ ...props }) => {
  // Avoid security issues by setting rel attribute when target is "_blank"
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Security_and_privacy
  const addons =
    props?.target === "_blank" ? { rel: "noopener noreferrer" } : {};

  return (
    <Link color="brand.600" textDecoration="underline" {...props} {...addons} />
  );
};
