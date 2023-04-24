'use client'
import { ReactNode } from 'react'
import { Button } from '@chakra-ui/react'

interface Props {
  children: ReactNode
  className?: string
}

export default function ButtonComponent(props: Props) {
  const className = props.className ?? ''

  return <Button className={className}>{props.children}</Button>
}
