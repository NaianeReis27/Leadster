import { Container } from './styles'
import { Dispatch, SetStateAction } from 'react'
interface PropsButton {
  text: string
  types: 'primary' | 'secondary' | 'tertiary' | 'quartenary'
  index?: number
  setIsClicked?: Dispatch<SetStateAction<number | null>>
  isClicked?: null | number
  action?: any
}

const Button = ({
  text,
  types,
  index,
  action,
  setIsClicked,
  isClicked,
}: PropsButton) => {
  
  const clicked = () => {
    if (setIsClicked) {
      if (isClicked == index) {
        setIsClicked(null)
      } else {
        setIsClicked(index!)
      }
    }

    if (action) {
      console.log(index)
      action()
    }
  }

  return (
    <Container
      onClick={clicked}
      isClicked={isClicked !== undefined && isClicked === index}
      types={types}
    >
      {text}
    </Container>
  )
}

export default Button
