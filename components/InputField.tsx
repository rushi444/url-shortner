import { FC } from 'react'
import { useController, Control } from 'react-hook-form'
import { InputGroup, InputLeftAddon, Input } from '@chakra-ui/react'

const getError = ({ invalid }: { invalid: boolean }) => ({
  hasError: invalid
})

type InputFieldProps = {
  name: string
  control: Control
  defaultValue?: string | undefined
  rules: object
}

export const InputField: FC<InputFieldProps> = ({
  name,
  control,
  defaultValue = '',
  rules = {}
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    defaultValue,
    rules
  })
  const { hasError } = getError(fieldState)

  return (
    <>
      <InputGroup>
        <InputLeftAddon>https://</InputLeftAddon>
        <Input {...field} isInvalid={hasError} />
      </InputGroup>
    </>
  )
}
