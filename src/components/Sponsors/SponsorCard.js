import React from "react"
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
  AspectRatioBox,
  Scale,
} from "@chakra-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Card } from "components/Card"
import { A } from "components/A"

export const SponsorCard = ({ logoSrc, link, name, excerpt, children }) => {
  const containerRef = React.useRef()
  const contentRef = React.useRef()
  const [isExpandable, setIsExpandable] = React.useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  React.useEffect(() => {
    if (containerRef.current && contentRef.current) {
      setIsExpandable(
        contentRef.current.offsetHeight - containerRef.current.offsetHeight > 0
      )
    }
  }, [setIsExpandable])

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
          <Link
            d="block"
            href={link}
            title={name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AspectRatioBox ratio={320 / 190}>
              <Image src={logoSrc} alt={name} objectFit="fit" />
            </AspectRatioBox>
          </Link>
          <Divider />
          <A href={link} title={name} target="_blank">
            {name}
          </A>
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
      <Scale in={isOpen}>
        {(styles) => (
          <Modal isOpen onClose={onClose} preserveScrollBarGap>
            <ModalOverlay opacity={styles.opacity} />
            <ModalContent {...styles}>
              <ModalHeader fontSize="xl">{name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <MDXRenderer>{children}</MDXRenderer>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Scale>
    </>
  )
}
