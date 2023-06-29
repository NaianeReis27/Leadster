import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.button<{ types: string; isClicked: boolean }>`
  ${({ types }) =>
    types == 'primary' &&
    tw`bg-transparent border-2 cursor-default border-solid text-sm border-blue-primary text-blue-primary px-2 py-3 rounded-sm `}

  ${({ types }) =>
    types == 'secondary' &&
    tw`bg-transparent hover:text-blue-primary hover:border-blue-primary  text-blue-tertiary  border-2 border-solid  border-blue-tertiary text-blue-tertiary px-4 py-3 font-semibold cursor-pointer rounded-3xl `}

  ${({ types }) =>
    types == 'tertiary' &&
    tw` border-white box-border hover:text-blue-primary  w-10 h-10 flex justify-center items-center bg-transparent border border-solid hover:border-blue-primary `}

  ${({ types }) =>
    types == 'quartenary' &&
    tw` bg-blue-primary font-semibold border-none p-5 h-min text-white text-[14px] rounded-3xl`}

  ${({ isClicked }) =>
    isClicked &&
    tw`bg-blue-primary text-white border-blue-primary hover:text-white `}
`
