import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw` w-362 mx-auto cursor-pointer overflow-hidden rounded-2xl justify-center flex flex-col h-290 shadow-shadow-primary`}
  p {
    ${tw`font-bold  py-2 px-8`}
  }
  &:hover {
    p {
      ${tw`text-blue-primary`}
    }
    div {
      .play {
        ${tw`opacity-100`}
      }
      div {
        ${tw`absolute top-0 left-0 w-full h-full bg-blue-primary  opacity-50`}
      }
    }
  }
`
export const Thumb = styled.div`
  ${tw` w-full flex justify-center overflow-hidden relative items-center h-198`}
  div {
    ${tw`absolute flex z-1 top-0 left-0 w-full h-full justify-center items-center transition-opacity bg-blue-secondary opacity-0`}
  }
  .play {
    ${tw`absolute z-20 opacity-0 shadow-lg`}
  }
  .thumb-image{
    ${tw` w-full flex justify-center relative items-center  `}
  }
`
