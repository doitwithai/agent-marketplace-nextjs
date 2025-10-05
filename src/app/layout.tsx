import './globals.css'
import Link from 'next/link'
import React from 'react'

export const metadata = { title:'MindStudio Market (Demo)', description:'Marketplace skeleton' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang='en'><body>
    <header className='header'><div className='container py-4 flex justify-between items-center'>
      <div className='font-semibold'>MindStudio Market</div>
      <nav className='nav text-sm'>
        <Link href='/market'>Market</Link>
        <Link href='/dashboard'>Builder</Link>
        <Link href='/account/orders'>Buyer</Link>
        <Link href='/admin'>Admin</Link>
        <Link className='btn-secondary' href='/market'>Browse</Link>
        <Link className='btn' href='/dashboard'>List an Agent</Link>
      </nav>
    </div></header>
    <main className='container py-6 space-y-6'>{children}</main>
    <footer className='footer'><div className='container py-6 text-xs text-muted'>© {new Date().getFullYear()} MindStudio Market — Demo • Terms • Privacy • AUP</div></footer>
  </body></html>)
}
