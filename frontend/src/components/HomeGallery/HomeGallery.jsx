import React from "react";
import "./HomeGallery.css";
import {
  Box,
  Flex,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";

const photos = [
  "./assets/images/gallery/g8.jpg",
  "./assets/images/gallery/g2.jpg",
  "./assets/images/gallery/g3.jpg",
  "./assets/images/gallery/g4.jpg",
  "./assets/images/gallery/g6.jpg",
  "./assets/images/gallery/g7.jpg",
  "./assets/images/gallery/g1.jpg",
];

const HomeGallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div class="h1-gall-home">
        <h1>Our Gallery</h1>
      </div>
      <Flex wrap="wrap" justify="center" spacing="2" p={2}>
        {photos.map((photo, index) => (
          <Box
            key={index}
            position="relative"
            overflow="hidden"
            cursor="pointer"
            transition="width 0.5s"
          >
            <Image
              src={photo}
              alt={`Photo ${index + 1}`}
              width="200px"
              height="400px"
              objectFit="cover"
              _hover={{ width: "300px", transform: "scale(1.2)" }}
              transition="transform 1s"
            />

            <Modal isOpen={isOpen} onClose={onClose} size="full">
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody p={0}>
                  <Image
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    w="100%"
                    h="100%"
                    objectFit="contain"
                  />
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default HomeGallery;
