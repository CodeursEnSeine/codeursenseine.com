'use client';

import React from 'react';
import {
  Link,
  Divider,
  Box,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
  Stack,
} from '@chakra-ui/react';
import { Card } from '@/components/Card';
import { Sponsor } from 'contentlayer/generated';
import Image from 'next/image';
import { MdxContent } from '@/components/MdxContent';

export type SponsorCardProps = { sponsor: Sponsor };

export const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [isExpandable, setIsExpandable] = React.useState(false);
  const modal = useDisclosure();

  React.useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setIsExpandable(
        contentRef.current?.offsetHeight - containerRef.current?.offsetHeight >
          0
      );
    }
  }, [setIsExpandable]);

  return (
    <>
      <Card
        ref={containerRef}
        as="article"
        maxH="22rem"
        position="relative"
        p={0}
      >
        <Stack ref={contentRef} p={6}>
          {sponsor.logoSrc && (
            <>
              <Link
                display="block"
                href={sponsor.link}
                title={sponsor.name}
                isExternal
              >
                <AspectRatio ratio={320 / 190}>
                  <Image
                    width={320}
                    height={190}
                    src={sponsor.logoSrc}
                    alt={sponsor.name}
                    style={{ objectFit: 'cover' }}
                  />
                </AspectRatio>
              </Link>
              <Divider />
            </>
          )}
          <Box display="flex" alignItems="baseline">
            <Link
              href={sponsor.link}
              title={sponsor.name}
              color="brand.600"
              textDecoration="underline"
              isExternal
            >
              {sponsor.name}
            </Link>
          </Box>
          <Box fontSize="sm">
            <MdxContent>{sponsor.body.code}</MdxContent>
          </Box>
        </Stack>
        {isExpandable && (
          <Box
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            pt={16}
            textAlign="center"
            background="linear-gradient(0deg, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)"
          >
            <Button
              onClick={modal.onOpen}
              variant="unstyled"
              display="inline-block"
              fontSize="sm"
              h="auto"
              m={4}
              p={4}
              py={2}
              _hover={{ color: 'brand.600' }}
            >
              Lire la suite
            </Button>
          </Box>
        )}
      </Card>
      <Modal motionPreset="scale" isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="xl">
            <Box>
              <Text>{sponsor.name}</Text>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MdxContent>{sponsor.body.code}</MdxContent>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
