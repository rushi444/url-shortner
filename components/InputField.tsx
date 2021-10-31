import { FC } from 'react'
import { useController, Control, ControllerFieldState } from 'react-hook-form'
import { InputGroup, InputLeftAddon, Input, Box } from '@chakra-ui/react'

const getError = ({ invalid, error, isTouched }: ControllerFieldState) => ({
  hasError: isTouched && invalid,
  message: error?.message || ''
})

type InputFieldProps = {
  name: string
  control: Control
  defaultValue?: string | undefined
  placeholder: string
}

export const InputField: FC<InputFieldProps> = ({
  name,
  control,
  defaultValue = '',
  placeholder = ''
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue
  })
  const { hasError } = getError(fieldState)
  return (
    <Box>
      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input {...field} isInvalid={hasError} placeholder={placeholder} />
      </InputGroup>
    </Box>
  )
}
