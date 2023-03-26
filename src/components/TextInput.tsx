import { FormControl, FormLabel, Input } from "@chakra-ui/react"
interface TextInputProps {
  label: string
  type: string
}

export function TextInput({ label, type }: TextInputProps) {
  return (
    <FormControl marginTop="32px">
      <FormLabel>{label}</FormLabel>
      <Input type={type} />
    </FormControl>
  )
}
