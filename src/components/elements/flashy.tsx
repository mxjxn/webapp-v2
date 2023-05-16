import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { TextProps } from '@chakra-ui/react'

const bg_size = '400%'

const kf = keyframes`
	to {
		background-position: ${bg_size} 0;
	}
`
interface WavyProps extends Omit<TextProps, 'color'> {
  hue?: number
  span?: number
  children?: React.ReactNode
}

const Wavy = styled.div<WavyProps>`
  background: linear-gradient(
      40deg,
      hsl(${(props) => props.hue ?? 150}, 90%, 55%),
      hsl(${(props) => (props.span ?? 150) + (props.hue ?? 150)}, 30%, 55%),
      hsl(${(props) => props.hue ?? 150}, 90%, 55%)
    )
    0 0 / 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${(props) => props.fontSize};
  display: inline-block;
  background-repeat: repeat;
  background-clip: text;
  animation: ${kf} 8s infinite linear;
  padding: ${(props) => props.padding || '0.1em'};
`

export function WavyBoi({
  children,
  ...props
}: React.PropsWithChildren<WavyProps>) {
  return <Wavy {...props}>{children}</Wavy>
}
