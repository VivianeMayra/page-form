import { Box, Text } from "@chakra-ui/react"

export function Header() {
  return (
    <Box display="flex" gap="32px" flexDirection="column">
      <Text
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="800"
        fontSize="2.2rem"
        lineHeight="40px"
        color="gray.800"
        textAlign="left"
      >
        Let’s Connect
      </Text>
      <Text
        fontFamily="Inter"
        fontStyle="normal"
        fontWeight="400"
        fontSize="1.25rem"
        lineHeight="28px"
        color="gray.600"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex,
        iaculis non magna sit amet, posuere fermentum magna. Praesent tempus
        risus mauris, ac pharetra mi sagittis id.
      </Text>
    </Box>
  )
}
