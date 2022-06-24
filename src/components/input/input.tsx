import * as React from 'react'
import {
  Input as BaseInput,
  InputGroup,
  InputLeftElement,
  useMultiStyleConfig,
} from '@chakra-ui/react'

export type InputProps = {
  icon?: JSX.Element
  placeholder: string
}

export const Input = ({ icon, placeholder }: InputProps) => {
  const styles = useMultiStyleConfig('Input', {})

  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        top="15%"
        left={2}
        data-testid="input-icon"
      >
        {icon}
      </InputLeftElement>
      <BaseInput
        sx={styles.input}
        paddingLeft={icon ? 12 : 4}
        placeholder={placeholder}
      />
    </InputGroup>
  )
}
