import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`fixed top-0 left-0 w-full h-full bg-[rgba(0, 0, 0, 0.5)] flex items-center justify-center z-[99999999999]`}

  .modal-content {
    ${tw`max-w-[600px] min-h-[600px] my-[30px] mx-[20px] bg-white rounded-[18px]`}

    .container-btn {
      ${tw`flex pt-[10px] pr-[10px]  justify-end`}

      button {
        ${tw`w-[30px]  h-[30px] flex border-0 justify-center items-center bg-transparent`}
      }
    }
    .container-title {
      p {
        ${tw`text-[20px] mx-auto px-[25px] max-w-[400px] font-semibold mt-[-10px]`}

        strong {
          ${tw`text-blue-primary`}
        }
      }
      ${tw` pb-[20px]`}
    }

    iframe {
      ${tw`w-full h-[338px]`}
    }

    .container-description {
      ${tw`p-[25px] `}

      h3 {
        ${tw`text-[18px] my-[10px]`}
      }
    }
  }
`

export const Overlay = styled.div`
  ${tw`  left-0 right-0 z-0  top-0 z-[-1] bottom-0 absolute `}
`
