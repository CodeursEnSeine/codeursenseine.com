import React from 'react';
import {
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  Table,
} from '@chakra-ui/react';
import slugify from 'slugify';
import type { MDXComponents } from 'mdx/types';

const A = (
  props: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
) => (
  <Link
    textDecoration="underline"
    color="brand.600"
    _hover={{ textDecoration: 'none' }}
    _focus={{ textDecoration: 'none' }}
    {...props}
  />
);
const H1 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <Heading
    as="h1"
    mb="0.5em"
    id={slugify(props.children?.toString() ?? '', {
      lower: true,
    })}
    {...props}
  />
);
const H2 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <Heading
    as="h2"
    fontWeight="normal"
    fontSize="2xl"
    mb="0.5em"
    id={slugify(props.children?.toString() ?? '', {
      lower: true,
    })}
    {...props}
  />
);
const H3 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <Heading
    as="h3"
    fontWeight="normal"
    fontSize="xl"
    mb="0.75em"
    mt="0.5em"
    {...props}
  />
);
const H4 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => (
  <Heading
    as="h4"
    fontWeight="bold"
    fontSize="lg"
    mb="0.75em"
    mt="0.5em"
    {...props}
  />
);
const H5 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => <Heading as="h5" fontSize="md" mb="0.5em" {...props} />;
const H6 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) => <Heading as="h6" fontSize="xs" mb="0.5em" {...props} />;
const HR = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHRElement>,
    HTMLHRElement
  >
) => <Divider my={8} {...props} />;
const UL = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  >
) => (
  <List styleType="disc" stylePosition="outside" ml="1em" mb="1em" {...props} />
);
const LI = (
  props: React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  >
) => <ListItem {...props} />;
const P = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) => <Text mb="1em" {...props} />;

const TABLE = (
  props: React.DetailedHTMLProps<
    React.TableHTMLAttributes<HTMLTableElement>,
    HTMLTableElement
  >
) => <Table variant="striped" colorScheme="gray" mb="1em" {...props} />;

export const components: MDXComponents = {
  a: A,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HR,
  li: LI,
  table: TABLE,
  p: P,
  ul: UL,
};
