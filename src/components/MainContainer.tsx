import { Container } from "@chakra-ui/react"
import { Form } from "./Form"
import { Header } from "./Header"

export function MainContainer() {
  return (
    <Container
      maxWidth={{ base: "100%", md: "140%" }}
      display="flex"
      flexDirection="column"
      gap="32px"
    >
      <Header />
      <Form />
    </Container>
  )
}
