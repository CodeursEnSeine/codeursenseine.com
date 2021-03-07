import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Divider, Heading, Link, List, ListItem, Text } from "@chakra-ui/react";
import slugify from "slugify";

const A = (props) => (
  <Link
    textDecoration="underline"
    color="brand.600"
    _hover={{ textDecoration: "none" }}
    _focus={{ textDecoration: "none" }}
    {...props}
  />
);
const H1 = ({ children, ...props }) => (
  <Heading
    as="h1"
    mb="0.5em"
    children={children}
    id={slugify(children, {
      lower: true,
    })}
    {...props}
  />
);
const H2 = ({ children, ...props }) => (
  <Heading
    as="h2"
    fontWeight="normal"
    fontSize="2xl"
    mb="0.5em"
    children={children}
    id={slugify(children, {
      lower: true,
    })}
    {...props}
  />
);
const H3 = (props) => (
  <Heading as="h3" fontWeight="normal" fontSize="xl" mb="0.5em" {...props} />
);
const H4 = (props) => (
  <Heading as="h4" fontWeight="normal" fontSize="lg" mb="0.5em" {...props} />
);
const H5 = (props) => <Heading as="h5" fontSize="md" mb="0.5em" {...props} />;
const H6 = (props) => <Heading as="h6" fontSize="xs" mb="0.5em" {...props} />;
const HR = (props) => <Divider my={8} {...props} />;
const UL = (props) => (
  <List styleType="disc" stylePosition="outside" ml="1em" mb="1em" {...props} />
);
const LI = (props) => <ListItem {...props} />;
const P = (props) => <Text mb="1em" {...props} />;

const components = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HR,
  li: LI,
  p: P,
  ul: UL,
};

export const Mdx = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
