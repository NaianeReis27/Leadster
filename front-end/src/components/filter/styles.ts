import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
 ${tw` w-full mx-auto flex justify-center items-center h-32 justify-between max-w-6xl`}

 div{
    ${tw` flex justify-center items-center gap-x-4`}
 }
`
export const Select = styled.select`
  ${tw` bg-transparent text-blue-tertiary  border-2 border-solid  border-blue-tertiary text-blue-tertiary p-3 font-semibold cursor-pointer rounded-xl`}
`

export const Label = styled.label`
  ${tw` bg-transparent text-blue-tertiary text-blue-tertiary font-extrabold `}
`