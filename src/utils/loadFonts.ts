import { Caveat, Josefin_Sans, Lato } from 'next/font/google'

export const titanOne = Caveat({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export const lato = Lato({
  weight: ['100', '300', '400', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const josefin = Josefin_Sans({
  weight: ['100', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
