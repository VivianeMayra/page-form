import { Box, Flex, Container, Text, Button } from "@chakra-ui/react"
import { List, ListItem, ListIcon } from "@chakra-ui/react"
import { Phone, Envelope, MapPin } from "@phosphor-icons/react"

export function App() {
  return (
    <Flex>
      <Box>
        <Container>
          <Text>Let’s Connect</Text>
          <Text>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue
            ex, iaculis non magna sit amet, posuere fermentum magna. Praesent
            tempus risus mauris, ac pharetra mi sagittis id.
          </Text>
        </Container>
        <Container>
          <Button>Submit</Button>
        </Container>
      </Box>
      <Box>
        <Container>
          <Text>Our Commitment</Text>
          <Box>
            <Text>
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius
              dictum{" "}
            </Text>
          </Box>
        </Container>
        <Container>
          <Text>Art Directing</Text>
          <Box>
            <Text>
              Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit
              nulla
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={Phone} color="" weight="fill" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={Envelope} color="" weight="fill" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MapPin} color="" weight="fill" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
            </List>
          </Box>
        </Container>
      </Box>
    </Flex>
  )
}
