import { currentYear } from '@/constants/site';
import {
  Flex,
  FlexProps,
  IconButton,
  Stack,
  ThemeTypings,
  useTheme,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FiX } from 'react-icons/fi';
import { NavLink, NavPreviousYears, NavSocial } from '.';
import { Logo } from '../Logo';

type NavProps = {
  breakpoint: ThemeTypings['breakpoints'];
  isOpen: boolean;
  onNavClose: () => void;
} & FlexProps;

export const Nav = ({
  breakpoint,
  isOpen,
  onNavClose = () => {},
  ...props
}: NavProps) => {
  const theme = useTheme();

  return (
    <Flex
      direction="column"
      alignItems={{ [breakpoint]: 'flex-end' }}
      background={theme.gradients.brand}
      color="white"
      position="fixed"
      top="0"
      left="0"
      bottom="0"
      transform={{
        base: `translate(${isOpen ? 0 : '100%'})`,
        [breakpoint]: 'none',
      }}
      transition={{ base: 'transform 0.4s', [breakpoint]: 'none' }}
      overflowY="auto"
      overflowX="hidden"
      zIndex="3"
      as="nav"
      {...props}
    >
      <Flex direction="column" flexGrow={1}>
        <IconButton
          variant="unstyled"
          aria-label="Menu"
          display={{ base: 'inline-flex', [breakpoint]: 'none' }}
          icon={<FiX />}
          size="lg"
          position="absolute"
          top="0"
          right="0"
          onClick={() => onNavClose()}
        />
        <Stack px="2">
          <Flex
            px="2"
            pt="4vh"
            pb="2vh"
            align="center"
            justify={{ base: 'center', [breakpoint]: 'flex-end' }}
          >
            <Link href={`/${currentYear}`}>
              <Logo w={{ base: '8rem', [breakpoint]: '12rem' }} />
            </Link>
          </Flex>
          <Stack spacing={6}>
            <Stack spacing={1}>
              <NavLink
                isMain
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}`}
                fontWeight="bold"
              >
                Édition {currentYear}
              </NavLink>

              {/* <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/inscription`}
                fontWeight="bold"
              >
                Inscription
              </NavLink> */}
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/programme`}
                fontWeight="bold"
              >
                Programme
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/speakers`}
                fontWeight="bold"
              >
                Intervenants
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/sponsors`}
                fontWeight="bold"
              >
                Sponsors
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/organisateurs`}
                fontWeight="bold"
              >
                Organisateurs
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/infos`}
                fontWeight="bold"
              >
                Infos
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/kit-de-presse`}
                fontWeight="bold"
              >
                Kit de presse
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/code-of-conduct`}
                fontWeight="bold"
              >
                Code de conduite
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href={`/${currentYear}/review-2023`}
                fontWeight="bold"
              >
                Review 2023
              </NavLink>
            </Stack>
            <Stack spacing="0">
              <NavLink
                isMain
                as={Link}
                onClick={() => onNavClose()}
                href="/meetups"
                fontWeight="bold"
              >
                Meetups
              </NavLink>
              <NavLink
                as={Link}
                onClick={() => onNavClose()}
                href="/meetups/sponsors"
                fontWeight="bold"
              >
                Sponsors Meetups
              </NavLink>
            </Stack>
            <Stack>
              <NavLink
                isMain
                as={Link}
                onClick={() => onNavClose()}
                href="/devoxx4kids"
                title="Devoxx4Kids"
                fontWeight="bold"
              >
                Devoxx4Kids
              </NavLink>
            </Stack>
          </Stack>
        </Stack>
        <Stack mt="auto" p="4" mb="2">
          <NavSocial />
          <NavPreviousYears />
        </Stack>
      </Flex>
    </Flex>
  );
};
