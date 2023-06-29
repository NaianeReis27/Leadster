import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw` py-[45px] text-[25px] font-normal flex w-[600px] gap-[15px] flex-col `}
  h2 {
    ${tw` text-[45px] font-medium`}
  }
  .text-primary {
    ${tw`border-b-2 py-[20px] border-0 border-gray-primary border-solid `}
  }

  div {
    ${tw`flex border-2 flex items-center gap-[15px]`}
    figure {
      ${tw`h-[80px] w-[200px]`}
      img {
        ${tw`h-inherit w-inherit p-0`}
      }
    }
  }

  div {
    div {
      ${tw` gap-[4px]`}
      .text-secondary {
        ${tw`text-[14px] font-semibold`}
      }
      
      figure {
        ${tw`w-[20px] h-[20px]`}
        img {
          ${tw`h-inherit w-inherit p-0`}
        }
      }

      .rating{
        ${tw`w-[100px] h-[15px]`}
      }
    }
  }
`
