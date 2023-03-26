import {
  Box,
  Flex,
  Container,
  Text,
  Button,
  List,
  ListItem,
  ListIcon,
  Textarea,
} from "@chakra-ui/react"

import { Phone, Envelope, MapPin } from "@phosphor-icons/react"
import { TextInput } from "./components/TextInput"

export function App() {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      gap="32px"
      background="gray.100"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="32px"
        width="50%"
      >
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="800"
          fontSize="36px"
          lineHeight="40px"
          color="gray.800"
        >
          Let’s Connect
        </Text>
        <Text
          fontFamily="Inter"
          fontStyle="normal"
          fontWeight="400"
          fontSize="20px"
          lineHeight="28px"
          color="gray.600"
          height="84px"
        >
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue
          ex, iaculis non magna sit amet, posuere fermentum magna. Praesent
          tempus risus mauris, ac pharetra mi sagittis id.
        </Text>

        <Box
          padding="32px"
          gap="32px"
          width="100%"
          background="white"
          boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
          borderRadius="8px"
        >
          <Box display="flex" gap="32px">
            <TextInput label="Name" type="text" />
            <TextInput label="Company name" type="text" />
          </Box>
          <Box display="flex" gap="32px">
            <TextInput label="Email" type="text" />
            <TextInput label="Phone number" type="text" />
          </Box>
          <Box display="flex" flexDirection="column">
            <TextInput label="Subject" type="text" />
            <Text fontWeight="500" marginTop="32px" marginBottom="8px">
              Your Message
            </Text>
            <Textarea />
          </Box>
          <Box display="flex" marginTop="32px">
            <Button background="others.50" color="white">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        gap="60px"
      >
        <Container width="384px" height="208px">
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
        </Container>
        <Container width="384px" height="248px">
          <Text
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="700"
            fontSize="18px"
            lineHeight="28px"
            color="gray.900"
            marginBottom="12px"
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
              Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
              nulla
            </Text>
            <List
              spacing={3}
              gap="20px"
              width="280px"
              height="112px"
              marginTop="24px"
              color="gray.500"
            >
              <ListItem>
                <ListIcon as={Phone} color="gray.500" weight="fill" />+ 123
                (4567) 8910
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
        </Container>
      </Box>
    </Flex>
  )
}
