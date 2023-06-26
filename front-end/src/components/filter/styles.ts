import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
  ${tw`  mx-auto flex flex-wrap py-16 gap-6 justify-center items-center justify-between max-w-6xl`}

  div {
    ${tw`mx-auto text-white flex gap-3 justify-center flex-wrap`}
  }
`
export const Select = styled.select`
  ${tw` bg-transparent outline-none text-blue-tertiary  border-2 border-solid  border-blue-tertiary text-blue-tertiary p-3 font-semibold cursor-pointer rounded-xl`}
`

export const Label = styled.label`
  ${tw` bg-transparent text-blue-tertiary flex items-center text-blue-tertiary font-extrabold `}
`
