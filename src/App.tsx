import { Container } from "@chakra-ui/react"
import { MainContainer } from "./components/MainContainer"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <Container
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      gap={{ base: "32px", md: "0" }}
      background="gray.100"
      mt={55}
      mb={55}
      maxW="90%"
    >
      <MainContainer />
      <Sidebar />
    </Container>
  )
}
