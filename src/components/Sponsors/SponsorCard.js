import React from "react";
import {
  Image,
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
  Badge,
} from "@chakra-ui/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Card } from "components/Card";
import { A } from "components/A";

export const SponsorCard = ({
  logoSrc,
  link,
  name,
  excerpt,
  children,
  isDonator,
}) => {
  const containerRef = React.useRef();
  const contentRef = React.useRef();
  const [isExpandable, setIsExpandable] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setIsExpandable(
        contentRef.current.offsetHeight - containerRef.current.offsetHeight > 0
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
        <Box ref={contentRef} p={6}>
          {logoSrc && (
            <>
              <Link
                d="block"
                href={link}
                title={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AspectRatio ratio={320 / 190}>
                  <Image src={logoSrc} alt={name} objectFit="fit" />
                </AspectRatio>
              </Link>
              <Divider />
            </>
          )}
          <Box d="flex" alignItems="baseline">
            <A href={link} title={name} target="_blank">
              {name}
            </A>
            {isDonator && <Badge ml={2}>Mécénat</Badge>}
          </Box>
          <Text fontSize="sm">{excerpt}</Text>
        </Box>
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
              onClick={onOpen}
              variant="unstyled"
              d="inline-block"
              fontSize="sm"
              h="auto"
              m={4}
              p={4}
              py={2}
              _hover={{ color: "brand.600" }}
            >
              Lire la suite
            </Button>
          </Box>
        )}
      </Card>
      <Modal motionPreset="scale" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize="xl">
            <Box>
              <Text>{name}</Text>
              {isDonator && <Badge>Mécénat</Badge>}
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MDXRenderer>{children}</MDXRenderer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
