import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Programa de emprestimos',
  description: 'O colaborador poderá simular um empréstimo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-center flex-col mt-10 bg-neutral-200`}>
      <Image
      src="/logo.png"
      width={200}
      height={200}
      alt='Logo da ModalGR'
      />
        
        {children}
        </body>
    </html>
  )
}
