import { Button, ButtonProps, Link } from '@chakra-ui/react';

export type CallForPaperButtonProps = { cfpId: string } & ButtonProps;

export const CallForPaperButton = ({
  cfpId,
  ...rest
}: CallForPaperButtonProps) => {
  return (
    <Button
      as={Link}
      _hover={{ textDecoration: 'none' }}
      href={`https://conference-hall.io/${cfpId}`}
      isExternal
      color="brand.600"
      {...rest}
    >
      Appel à orateurs
    </Button>
  );
};
