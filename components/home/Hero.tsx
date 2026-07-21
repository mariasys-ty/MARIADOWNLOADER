'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Link2, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function Hero() {
 const [url, setUrl] = useState('')
 const router = useRouter()
 
 const handleAnalyze = (e: React.FormEvent) => {
  e.preventDefault()
  if (url) router.push(`/downloader?url=${encodeURIComponent(url)}`)
 }
 
 return (
  <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-4">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-[120px] animate-pulse" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm mb-6"
        >
          <Sparkles className="h-4 w-4 text-accent" /> Premium Video Downloader
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
        >
          Download videos <span className="text-gradient">instantly</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
        >
          Download publicly accessible videos, reels, shorts and stories from your favorite platforms in HD.
        </motion.p>

        <motion.form 
          onSubmit={handleAnalyze}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto p-2 glass rounded-2xl"
        >
          <div className="relative flex-1">
            <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input 
              type="text" value={url} onChange={(e) => setUrl(e.target.value)} required
              placeholder="Paste a video URL here..." 
              className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
          <Button type="submit" className="bg-primary text-white hover:bg-primary/90 px-8 py-4">
            Analyze <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.form>
      </div>
    </section>
 )
}