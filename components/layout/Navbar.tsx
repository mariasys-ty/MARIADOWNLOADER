'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { Github } from 'lucide-react'

export default function Navbar() {
 return (
  <motion.nav 
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-gradient">
            MARIA
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="/downloader" className="text-sm font-medium hover:text-primary transition-colors">Downloader</Link>
            <Link href="/history" className="text-sm font-medium hover:text-primary transition-colors">History</Link>
            <Link href="/settings" className="text-sm font-medium hover:text-primary transition-colors">Settings</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com" target="_blank" className="hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
 )
}