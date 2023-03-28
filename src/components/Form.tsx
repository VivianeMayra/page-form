import { Box, Button, Text, Textarea } from "@chakra-ui/react"

import { TextInput } from "./TextInput"

export function Form() {
  return (
    <Box
      padding="32px"
      background="white"
      boxShadow="0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)"
      borderRadius="8px"
    >
      <form>
        <Box
          display="flex"
          marginTop="-32px"
          gap={{ base: "0", md: "32px" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <TextInput label="Name" type="text" />

          <TextInput label="Company name" type="text" />
        </Box>
        <Box
          display="flex"
          gap={{ base: "0", md: "32px" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <TextInput label="Email" type="email" />
          <TextInput label="Phone number" type="number" />
        </Box>
        <Box display="flex" flexDirection="column">
          <TextInput label="Subject" type="text" />
          <Text fontWeight="500" marginTop="32px" marginBottom="8px">
            Your Message
          </Text>
          <Textarea resize="none" />
        </Box>
        <Box marginTop="32px">
          <Button
            background="others.50"
            color="white"
            width={{ base: "100%", md: "initial" }}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}
