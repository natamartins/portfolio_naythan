import '../styles/styles.scss'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const robot = Roboto(
  {
    subsets:
      ['latin'],
    weight: '500'
  })

export const metadata: Metadata = {
  title: 'Natã Martins',
  description: 'my  portfolio profissional',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={robot.className}>{children}</body>
    </html>
  )
}
