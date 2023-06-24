import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.button<{ types: string }>`
  ${tw` bg-transparent text-blue-tertiary  border-2 border-solid  border-blue-tertiary text-blue-tertiary p-2 font-semibold cursor-pointer rounded-3xl`}
  ${({ types }) =>
    types == "primary" && tw`bg-transparent border-2 border-solid text-sm border-blue-primary text-blue-primary p-2 cursor-pointer rounded-sm `}
`
