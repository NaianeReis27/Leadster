import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw` px-[20px] bg-blue-secondary bg-left-bottom bg-no-repeat bg-center bg-[url('/images/relevo.svg')] flex-wrap overflow-hidden justify-center gap-y-[20px] gap-x-[80px] flex   relative m-auto`}
  svg {
    ${tw`z-1 mx-auto`}
  }
  img {
    ${tw`p-40 w-full bg-transparent absolute z-0`}
  }
`
