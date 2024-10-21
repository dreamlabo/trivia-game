import { Alegreya, Open_Sans } from 'next/font/google'
 
// export const cinzel = Cinzel({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-cinzel',
// })
 
export const alegreya  = Alegreya ({
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
})

export const openSans  = Open_Sans ({
    weight: ['300','400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-openSans',
  })