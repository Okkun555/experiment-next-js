import { Button } from '@mui/material'
import { FC } from 'react'

type ButtonProps = {
  text: string
  onClick: () => void
}

const SubmitButton: FC<ButtonProps> = ({ text, onClick }) => (
  <Button variant='contained'>{text}</Button>
)

export default SubmitButton
