import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.button<{ types: string }>`
  ${({ types }) =>
    types == "primary" && tw`bg-transparent border-2 border-solid text-sm border-blue-primary text-blue-primary p-2 cursor-pointer rounded-sm `}
`
