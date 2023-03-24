import { FormControl, FormLabel, Input } from "@chakra-ui/react"
interface TextInputProps {
  label: string
  type: string
}
export function TextInput({ label, type }: TextInputProps) {
  return (
    <FormControl marginRight="30px" marginTop="32px" width="736px">
      <FormLabel>{label}</FormLabel>
      <Input type={type} />
    </FormControl>
  )
}
