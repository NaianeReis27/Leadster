import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`w-600 h-600 relative justify-center flex items-center overflow-hidden`}
  svg {
    ${tw`absolute w-600 `}
  }
`
