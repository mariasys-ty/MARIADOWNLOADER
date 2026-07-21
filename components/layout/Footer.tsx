import Link from 'next/link'
import { Github, Twitter } from 'lucide-react'

export default function Footer() {
 return (
  <footer className="border-t border-border/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MARIA Downloader. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
 )
}