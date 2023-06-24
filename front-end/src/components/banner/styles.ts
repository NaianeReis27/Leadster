import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw` bg-blue-secondary  text-center flex-col p-5 box-border md:gap-y-3 gap-y-2 h-screen-37 w-full mx-auto flex justify-center items-center h-32`}
  h3 {
    ${tw`text-3xl md:text-5xl text-blue-tertiary my-0 font-normal`}
  }

  div {
    img {
      ${tw`w-full  md:-right-6  -right-3 bottom-[18]  absolute`}
    }
    h2 {
      ${tw`text-5xl md:text-8xl  text-blue-primary my-0 font-semibold`}
      span {
        ${tw`text-5xl md:text-8xl  relative text-blue-primary my-0 font-semibold`}
      }
    }
    p {
      ${tw` md:text-lg  text-blue-tertiary  md:mt-10 mt-4  font-semibold border-t border-0  border-solid border-gray-primary pt-2 `}
    }
  }
`
