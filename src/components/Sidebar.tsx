import {
  Box,
  Container,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react"
import { Envelope, MapPin, Phone } from "@phosphor-icons/react"

export function Sidebar() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      gap="40px"
      maxWidth={{ base: "100%", md: "30%" }}
      marginTop="-140px"
    >
      <Box height="208px" maxWidth="100%">
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="28px"
          color="gray.900"
          marginBottom="12px"
        >
          Our Commitment
        </Text>
        <Box
          background="white"
          padding="28px"
          borderRadius="8px"
          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        >
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="18px"
            lineHeight="28px"
            color="gray.500"
          >
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
            dictum{" "}
          </Text>
        </Box>
      </Box>
      <Box height="208px" maxWidth="100%">
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="700"
          fontSize="18px"
          lineHeight="28px"
          color="gray.900"
          marginBottom="12px"
          marginTop="32px"
        >
          Art Directing
        </Text>
        <Box
          background="white"
          padding="28px "
          borderRadius="8px"
          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
        >
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="400"
            fontSize="18px"
            lineHeight="28px"
            color="gray.500"
          >
            Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla
          </Text>
          <List spacing={3} gap="20px" marginTop="24px" color="gray.500">
            <ListItem>
              <ListIcon as={Phone} color="gray.500" weight="fill" />+ 123 (4567)
              8910
            </ListItem>
            <ListItem>
              <ListIcon as={Envelope} color="gray.500" weight="fill" />
              hello@example.com
            </ListItem>
            <ListItem>
              <ListIcon as={MapPin} color="gray.500" weight="fill" />
              120 Street Lorem ipsum Sit Amet
            </ListItem>
          </List>
        </Box>
      </Box>
    </Container>
  )
}
