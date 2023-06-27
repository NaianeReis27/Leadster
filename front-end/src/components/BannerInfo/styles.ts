import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw` bg-blue-secondary overflow-hidden justify-center gap-[80px] flex  w-full h-600 relative m-auto`}
  svg{
    ${tw`z-1`}
  }
  img{
    ${tw`p-40 w-full bg-transparent absolute z-0`}
  }
  
`
