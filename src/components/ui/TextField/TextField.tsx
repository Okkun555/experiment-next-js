import {
  FormHelperText,
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import { FC } from 'react'

type TextFieldProps = MuiTextFieldProps & {
  inputRef?: MuiTextFieldProps['ref']
  errorMessage?: string
}

const TextField: FC<TextFieldProps> = ({ inputRef, errorMessage, ...rest }) => {
  return (
    <>
      <MuiTextField ref={inputRef} error={!!errorMessage} {...rest} />
      {!!errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </>
  )
}

export default TextField
