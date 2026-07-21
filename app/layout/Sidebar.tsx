'use client'
import { History, Settings, Home } from 'lucide-react'
import Link from 'next/link'

export function Sidebar() {
 return (
  <aside className="hidden md:block w-64 pr-8">
      <nav className="space-y-2 sticky top-24">
        <Link href="/downloader" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm font-medium">
          <Home className="h-5 w-5" /> Downloader
        </Link>
        <Link href="/history" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary transition-colors text-sm font-medium">
          <History className="h-5 w-5" /> History
        </Link>
        <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted transition-colors text-sm font-medium">
          <Settings className="h-5 w-5" /> Settings
        </Link>
      </nav>
    </aside>
 )
}