import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.footer`
  ${tw` w-full mx-auto flex justify-center gap-[50px] flex-col items-center py-[50px]`}
  div {
  }
  .footer-logo {
    ${tw` gap-[6px] mx-auto flex justify-center items-center flex-col `}
  }
  .footer-links {
    ${tw`w-full flex-wrap items-center mx-auto justify-between flex  flex-row max-w-6xl`}

    &>div {
      ${tw`px-[20px]`}
      ul {
        ${tw`my-[40px]  flex flex-col gap-[25px]`}
        a {
          ${tw`font-normal text-blue-tertiary`}
        }
      }
    }
  }

  h3 {
    ${tw`font-bold text-[18px] `}
  }

  .footer-social {
    ${tw` flex flex-row justify-between mt-[20px]  w-full`}
    div {
      ${tw` items-center flex bg-[#F7F8FB] justify-center font-bold text-[18px] w-[60px] h-[60px] rounded-[25%]`}
    }
  }
`
