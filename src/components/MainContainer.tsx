import { Container } from "@chakra-ui/react"
import { Form } from "./Form"
import { Header } from "./Header"

export function MainContainer() {
  return (
    <Container
      width={{ base: "100%", md: "160%" }}
      display="flex"
      flexDirection="column"
      gap="64px"
    >
      <Header />
      <Form />
    </Container>
  )
}
