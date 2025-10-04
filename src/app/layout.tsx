import './globals.css'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'MindStudio Market (Demo)',
  description: 'Marketplace skeleton for AI agents and services'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="border-b">
          <div className="container py-4 flex items-center justify-between">
            <div className="font-semibold">MindStudio Market</div>
            <nav className="flex items-center gap-4 text-sm">
              <Link href="/market">Market</Link>
              <Link href="/dashboard">Builder</Link>
              <Link href="/account/orders">Buyer</Link>
              <Link href="/admin">Admin</Link>
              <a className="btn-secondary" href="/market">Explore</a>
              <a className="btn" href="/dashboard">List an Agent</a>
            </nav>
          </div>
        </header>
        <main className="container py-6 space-y-6">
          {children}
        </main>
        <footer className="border-t">
          <div className="container py-6 text-xs text-gray-500">
            © {new Date().getFullYear()} MindStudio Market — Demo • Terms • Privacy • AUP
          </div>
        </footer>
      </body>
    </html>
  )
}
